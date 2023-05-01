const express = require('express');
const db = require('../database.js').databaseConnection;
const router = express.Router();


//API for setting up the grade levels and sections in the Database page
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

const prelimQuery = "SELECT EXISTS(SELECT * FROM students WHERE first_name = ? AND last_name = ?) AS 'result'";
const prelimValues = [      
    request.body['student-first-name'],
    request.body['student-last-name']
];

db.query(prelimQuery, prelimValues, (err, data)=>{
    if(err) return response.json(err)

    if (data[0]['result'] == 0){
    const query = "INSERT INTO students (`first_name`, `middle_name`, `last_name`, `grade_level`, `section_name`, `parent_fn`, `parent_mn`, `parent_ln`, `relationship`, `contact_num`) VALUES (?)"
    const values = [
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
        if(err) return response.json(err)
        return response.json("Student has been enrolled succesfully")
    })
    }
    else
    return response.json("Student already exists")
});
});

module.exports=router;