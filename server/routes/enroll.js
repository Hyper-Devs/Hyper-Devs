//status 210 - success
//status 220 - success but no changes made in database
//status 400 - no uploaded files
//status 410 - invalid file type
//status 420 - invalid file template


const fs = require('fs');
const csv = require('csv-parser');
const express = require('express');
const fileUpload = require('express-fileupload');


const db = require('../database.js').databaseConnection;
const router = express.Router();
router.use(fileUpload());


//API for setting up the grade level and section filters in the Database page
router.get("/available-rooms", async (request, response) => {
    // for future improvements, the school year here must be flexible and not hard-coded 2023-2024
    const query = "SELECT grade_level, section_name FROM `sections` WHERE school_year = '2023-2024'"
    db.query(query, (error, data) => {
      if(error) { return response.json(error); }
  
      // the task here is to identify all of the grade levels and retrieve all of the sections associated with them
      const rawData = data.map((pair) => [pair.grade_level, pair.section_name])
      let gradeLevels = {}
      let tempContainer = []
      for (let i=0; i<rawData.length; i++ ){
        if (!tempContainer.includes(rawData[i][0])){
          tempContainer.push(rawData[i][0]);
          gradeLevels[rawData[i][0]] = [];
        }
        if (!gradeLevels[rawData[i][0]].includes(rawData[i][1])){
          gradeLevels[rawData[i][0]].push(rawData[i][1]);
        }
      }
  
      response.json(gradeLevels)
    });
});
  
//API for adding a student into the database 
router.post("/new-student", (request, response)=>{
  // suggestion: add a mechanism where the server supplies some string when middle name is not given

  const query = "INSERT IGNORE INTO students (`id`, `first_name`, `middle_name`, `last_name`, `grade_level`, `section_name`, `parent_fn`, `parent_mn`, `parent_ln`, `relationship`, `contact_num`) VALUES (?)"
  const values = [
      request.body['student-rfid'],
      request.body['student-first-name'],
      request.body['student-middle-name'],
      request.body['student-last-name'],
      request.body['student-grade-level'],
      request.body['student-section'],
      request.body['guardian-first-name'],
      request.body['guardian-middle-name'],
      request.body['guardian-last-name'],
      request.body['guardian-relationship'],
      request.body['guardian-contact-number'],
  ];

  db.query(query, [values], (err, data)=>{
    if (err) {return response.json(err)}

    if (data['affectedRows'] > 0) {return response.status(210).send("Student enrolled successfully")}
    else {return response.status(220).send("No changes saved")}
  });
});

//API for adding students by batch
router.post("/batch/new-student", (request, response) => {
  //checks if the user uploaded any file
  if (!request.files){ return response.status(400).send("No files were uploaded."); }

  const file = request.files['csv'];
  const path = "./fileUploads/" + file['name'];
  const extensionName = file['mimetype'];
  const allowedExtension = ['text/csv'];


  //checks if the user uploaded other file type aside from CSV
  if(!allowedExtension.includes(extensionName)){ return response.status(410).send("Invalid file type"); }


  //traverses the CSV file
  file['mv'](path, (err) => {
    if (err) { return response.status(500).send(err); }

    var keys;
    var results = [];
    fs.createReadStream(path)
      .pipe(csv())
      .on('headers', (headerList) => { keys = headerList; })
      .on('data', (data) => results.push(data))
      .on('end', () => {
        
        const acceptedKeys = [
          'student-rfid',
          'student-first-name',
          'student-middle-name',
          'student-last-name',
          'student-grade-level',
          'student-section',
          'guardian-first-name',
          'guardian-middle-name',
          'guardian-last-name',
          'guardian-relationship',
          'guardian-contact-number'
        ]

        //checks if the user uploaded the correct CSV file template
        if (JSON.stringify(acceptedKeys) != JSON.stringify(keys)) { return response.status(420).send("Wrong file template!"); }


        //limit of INSERT statement is 1000 - not tested for 1000 CSV values
        var temp = results, flag = 0;
        for (var i=0; i<results.length; i++){
          if (results.length > 999){ temp = results.slice(999) }
          
          const query = "INSERT IGNORE INTO students (`id`, `first_name`, `middle_name`, `last_name`, `grade_level`, `section_name`, `parent_fn`, `parent_mn`, `parent_ln`, `relationship`, `contact_num`) VALUES ?"
          const values = temp.map(row => [
            row['student-rfid'],
            row['student-first-name'],
            row['student-middle-name'],
            row['student-last-name'],
            row['student-grade-level'],
            row['student-section'],
            row['guardian-first-name'],
            row['guardian-middle-name'],
            row['guardian-last-name'],
            row['guardian-relationship'],
            row['guardian-contact-number']
          ]);

          db.query(query, [values], (err, data)=>{
            if (err) {return response.status(500).send("An error occurred. Refresh page")}

            if (data['affectedRows'] > 0 && flag == 0) {flag = 1}
          });                                                                                             

          i += temp.length;
          results = results.slice(999,results.length);
          temp = results;
        };
        if (flag == 1) {return response.status(210).send("Batch enroll successful")}
        else {return response.status(220).send("No changes made")} 
      });
  });
});

//API for student migration
router.put("/batch/student-migration", (request, response) => {
  const query = `INSERT INTO students (id, grade_level, section_name) 
              VALUES ? 
              ON DUPLICATE KEY UPDATE 
                grade_level = VALUES(grade_level), 
                section_name = VALUES(section_name);`;

  const newGL = request.body['new-student-grade-level'];
  const newS = request.body['new-student-section'];
  const values = request.body['rowsToUpdate'].map(student => [student.sId, newGL, newS]);

  db.query(query, [values], (err, data)=>{
    if(err) return response.json(err)
    return response.status(210).send("Student migration successful")
  });
});

module.exports=router;