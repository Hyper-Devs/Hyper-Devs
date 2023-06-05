const express = require('express');
const db = require('../database.js').databaseConnection;
const router = express.Router();

function stringInputConditioner (string) {
  if (string[0].match(/[a-z]/i)){
    var newString = string[0].toUpperCase();
    for (var i=1; i<string.length; i++){
      if (string[i].match(/[a-z]/i))
        string[i].toLowerCase;
        newString = newString + string[i].toLowerCase();
    }
    return newString;
  }
  else {
    return string
  }
};

function outputConditioner (student_prim_infoo, results, mode) {
  var searchVal, returnVal = "Student not found", studentPrimVal;
  const student_prim_info = student_prim_infoo;
  var logs = []
  if (/^\d+$/.test(student_prim_info)){ searchVal = 'id'; }   
  else{                                                      //student_prim_info parameter is a name
    searchVal = 'first_name'                
    studentPrimVal = student_prim_info.toLowerCase()                  
  }

  for(let i=0; i<results.length; i++){
    var testCases = [];

    if (/^\d+$/.test(student_prim_info)) testCases.push(results[i][searchVal] == student_prim_info);
    else {
      testCases.push(results[i][searchVal].toLowerCase() == studentPrimVal);
      testCases.push(results[i][searchVal].toLowerCase()+' '+results[i]['last_name'].toLowerCase() == studentPrimVal);
      testCases.push(results[i]['last_name'].toLowerCase() == studentPrimVal);
    }
  
    if (testCases.includes(true)){
        returnVal = results[i];
        if (mode == "attendance-logs" || mode == "student-info") logs.push(results[i])
        else return returnVal;
    }
  }
  if ((mode == "attendance-logs" || mode == "student-info") && logs.length > 0) return logs
  else return null
};

//API for setting up the search filters in the Database page
router.get("/student-filter", async (request, response) => {
    const query = "SELECT * FROM `sections`"
    db.query(query, (error, data) => {
      if(error) { return response.json(error); }
  
      //the task here is to categorize the school years and the grade levels under them and sections under the grade levels
      const sectionOption = data.map((section) => [section.section_name, section.grade_level,section.school_year])
      let school_years = {};
      let tempContainer = [];
  
      for (let i=0; i < sectionOption.length; i++){
        if (!tempContainer.includes(sectionOption[i][2])){  
          tempContainer.push(sectionOption[i][2]);
          school_years[sectionOption[i][2]] = {};
        }
      
        let currentObject = school_years[sectionOption[i][2]];
        let grade_level = sectionOption[i][1];
        if (!(grade_level in currentObject))
          currentObject[grade_level] = [];
        
        if (!(currentObject[grade_level].includes(sectionOption[i][0])))
          currentObject[grade_level].push(sectionOption[i][0])
        
        school_years[sectionOption[i][2]] = currentObject;
      }
  
      response.json(school_years)
    });
});
  




//API for retrieving student's information [with only one search filters - sec mode]
router.get("/student-filter/student/:student_prim_info/:school_year", (request, response) => {
  const query = `SELECT students.id, students.first_name, students.middle_name, students.last_name, students.grade_level, students.section_name, sections.school_year, students.parent_fn, students.parent_mn, students.parent_ln, students.relationship, students.contact_num
              FROM students,sections
              WHERE students.grade_level = sections.grade_level AND students.section_name = sections.section_name 
              AND sections.school_year = ?`;
  const values = [request.params.school_year];

  db.query(query, values, (error, data) => {
      if (error) { return response.json(error); }
      
      //the task here is to further refine the query results by using the given ID or name
      if (data != [null]){
        const value = outputConditioner(request.params.student_prim_info, data, "student-info");
        return response.status(220).json([{mode: "student-basic-info", values: value}])
      }
      else return response.json([])
  });
});

//API for retrieving student's information [with only two search filters - third mode]
router.get("/student-filter/student/:student_prim_info/:school_year/:grade_level", (request, response) => {
  const query = `SELECT students.id, students.first_name, students.middle_name, students.last_name, students.grade_level, students.section_name, sections.school_year, students.parent_fn, students.parent_mn, students.parent_ln, students.relationship, students.contact_num
              FROM students,sections
              WHERE students.grade_level = sections.grade_level AND students.section_name = sections.section_name 
              AND sections.school_year = ? AND students.grade_level = ?`;
  const values = [request.params.school_year, request.params.grade_level];

  db.query(query, values, (error, data) => {
      if (error) { return response.json(error); }
      
      //the task here is to further refine the query results by using the given ID or name
      if (data != [null]){
        const value = outputConditioner(request.params.student_prim_info, data, "student-info");
        console.log(value)
        return response.json([{mode: "student-basic-info", values: value}])
      }
      else
        return response.json([])
  });
});

//API for retrieving student's information [with all three search filters - default mode]
router.get("/student-filter/student/:student_prim_info/:school_year/:grade_level/:section_name", (request, response) => {
  const query = `SELECT students.id, students.first_name, students.middle_name, students.last_name, students.grade_level, students.section_name, sections.school_year, students.parent_fn, students.parent_mn, students.parent_ln, students.relationship, students.contact_num
              FROM students,sections
              WHERE students.grade_level = sections.grade_level AND students.section_name = sections.section_name 
              AND sections.school_year = ? AND students.grade_level = ? AND students.section_name = ?`;
  const values = [request.params.school_year, request.params.grade_level, request.params.section_name];

  db.query(query, values, (error, data) => {
      if (error) { return response.json(error); }
      
      //the task here is to further refine the query results by using the given ID or name
      if (data != [null]){
        const value = outputConditioner(request.params.student_prim_info, data, "student-info");
        return response.json([{mode: "student-basic-info", values: value}])
      }
      else
        return response.json([])
  });
});

//API for retrieving a student's attendance logs - exclusive only to one student
router.get("/student-filter/student/:student_prim_info/:school_year/:grade_level/:section_name/:date_start/:date_end", (request, response) => {
  const query = `SELECT students.id, students.first_name, students.last_name, attendance_log.time_in, attendance_log.time_out, attendance_log.date
                  FROM students, sections, attendance_log
                  WHERE students.grade_level = sections.grade_level AND students.section_name = sections.section_name AND students.id = attendance_log.sID
                  AND sections.school_year = ? AND students.grade_level = ? AND students.section_name = ?`;
  const values = [request.params.school_year, request.params.grade_level, request.params.section_name];

  db.query(query, values, (error, data) => {
      if (error) { return response.json(error); }

      // 1st Phase of Results Refinement
      // refine the query results by using the given ID or name
      const logs = outputConditioner(request.params.student_prim_info, data, "attendance-logs");
      if (logs == null) { return response.json("No attendance logs found"); }

      
      // 2nd Phase of Results Refinement
      // isolate the attendance logs that are under the requested date range
      // determines the set of dates (inclusive) given the date range
      const startDate = new Date(request.params.date_start);
      const endDate = new Date(request.params.date_end);
      const dateRange = [];
      
      // generates the dates under the date range
      var newStartDate = startDate
      newStartDate.setDate(newStartDate.getDate()+1)
      for (let d = startDate; d <= endDate; d.setDate(d.getDate() + 1)) {
        dateRange.push(new Date(d));
      }
      var newEndDate = startDate
      newEndDate.setDate(newEndDate.getDate())
      dateRange.push(newEndDate)
      
      // checks if the dates returned by the server is within the requested date range
      returnVal = [];
      for (var i=0; i<dateRange.length; i++){
        for (var j=0; j<logs.length; j++)
          if (dateRange[i].toString() === logs[j]['date'].toString()){
            returnVal.push(logs[j])
          }
      }

      if (logs != []) return response.json([{mode: "student-attendance-logs", values: returnVal}])
      else return response.json("No attendance logs found")
  });
});




//API for retrieving all students in a school year
router.get("/students/batch/:school_year", (request, response) => {
  const query = `SELECT students.id, students.first_name, students.middle_name, students.last_name, students.grade_level, students.section_name, sections.school_year, students.parent_fn, students.parent_mn, students.parent_ln, students.relationship, students.contact_num
                  FROM students,sections
                  WHERE students.grade_level = sections.grade_level AND students.section_name = sections.section_name 
                  AND sections.school_year = ?`;
  const values = [request.params.school_year];

  db.query(query, values, (error, data) => {
    if (error) { return response.json(error); }
    return response.json([{mode: "student-basic-info", values: data}])
  });
});

//API for retrieving all students in a grade level
router.get("/students/batch/:school_year/:grade_level", (request, response) => {
  const query = `SELECT students.id, students.first_name, students.middle_name, students.last_name, students.grade_level, students.section_name, sections.school_year, students.parent_fn, students.parent_mn, students.parent_ln, students.relationship, students.contact_num
                  FROM students,sections
                  WHERE students.grade_level = sections.grade_level AND students.section_name = sections.section_name 
                  AND sections.school_year = ? AND students.grade_level = ?`;
  const values = [request.params.school_year, request.params.grade_level];

  db.query(query, values, (error, data) => {
    if (error) { return response.json(error); }
    return response.json([{mode: "student-basic-info", values: data}])
  });
});

//API for retrieving all students in a section
router.get("/students/batch/:school_year/:grade_level/:section", (request, response) => {
  const query = `SELECT students.id, students.first_name, students.middle_name, students.last_name, students.grade_level, students.section_name, sections.school_year, students.parent_fn, students.parent_mn, students.parent_ln, students.relationship, students.contact_num
                  FROM students,sections
                  WHERE students.grade_level = sections.grade_level AND students.section_name = sections.section_name 
                  AND sections.school_year = ? AND students.grade_level = ? AND students.section_name = ?`;
  const values = [request.params.school_year, request.params.grade_level, request.params.section];

  db.query(query, values, (error, data) => {
    if (error) { return response.json(error); }
    return response.json([{mode: "student-basic-info", values: data}])
  });
});



//API for retrieving users or their override logs
router.get("/admin/override-logs/:admin_name/:position/:access_mode/:date_from/:date_to", (request, response) => {
  const values = [stringInputConditioner(request.params.admin_name), request.params.position]
  const query = `SELECT *
                FROM (SELECT overrider_name, position, student_name, overriding_reason, overriding_date
                  FROM users, override_logs
                  WHERE override_logs.Overrider_Name = users.name) AS results
                WHERE results.Overrider_Name = ? && results.Position = ?`;

  db.query(query, values, (error, data) => {  
    if (error) { return response.json(error); }

    // the task here is to further refine the query result
    var returnVal = null;
    if (request.params.access_mode == "BasicInformation"){                //mode: returns basic info regarding the searched user
      if (data.length > 0)
        returnVal = [{
          overrider_name : stringInputConditioner(request.params.admin_name),
          overrider_position : request.params.position,
          overrider_total_logs : data.length
        }]
      return response.json([{mode: "override-basic-info", values: returnVal}])
    }
    else if (request.params.access_mode == "Logs"){                       //mode: returns overriding logs regarding the searched user
      // determines the set of dates (inclusive) given the date range
      const startDate = new Date(request.params.date_from);
      const endDate = new Date(request.params.date_to);
      const dateRange = [];
      
      var newStartDate = startDate
      newStartDate.setDate(newStartDate.getDate()+1)
      for (let d = startDate; d <= endDate; d.setDate(d.getDate() + 1)) {
        dateRange.push(new Date(d));
      }
      var newEndDate = startDate
      newEndDate.setDate(newEndDate.getDate())
      dateRange.push(newEndDate)
      
      // checks if the dates returned by the server is within the requested date range
      if (data.length > 0){
        returnVal = [];
        for (var i=0; i<dateRange.length; i++){
          for (var j=0; j<data.length; j++)
            if (dateRange[i].toString() === data[j]['overriding_date'].toString()){
              returnVal.push(data[j])
            }
        }
      }
      return response.json([{mode: "override-logs", values: returnVal}])
    }
  });
});

//API for deleting a student from the database
router.delete("/delete/:student_id", (req,res)=>{
  const studentID = req.params.student_id
  const q = "DELETE FROM students WHERE id = ?"
  db.query(q, [studentID], (err, data) =>{
      if(err) return res.json(err)
      return res.json("Student has been deleted succesfully")
  })
});

//API for updating a student's section and grade level from the database
router.put("/update", (req, res) => {
  const q = "UPDATE students SET `grade_level`= ?, `section_name`= ? WHERE id = ?";

  const values = [
      req.body['grade_level'],
      req.body['section_name'],
      req.body['student_id']
  ];

  db.query(q, values, (err, data) => {
      if (err) return res.send(err);
      return res.json(data);
  });
});


//API for updating a student's information from the database
router.put("/students/edit-student", (request, response) => {
  var query = "UPDATE students SET ";
  var values = [];
  for (var key in request.body){
    if (request.body[key] != "" && key != "student-id"){
      query += key + "=" + '?' + ","
      values.push(request.body[key]);
    };
  };
  if (query[query.length - 1] == ',') {query = query.substring(0, query.length - 1)}
  query += "WHERE id = ?"
  values.push(request.body['student-id'])

  db.query(query, values, (error, data) => {
    if (error) return response.send(error)
    
    if (data['affectedRows'] == 1){
      return response.status(210).send("Student editing successful")
    }
    return response.json(data)
  })
});


// Get user name and role by access_id
router.get('/get-user/:access_id', async (req, res) => {
    const { access_id } = req.params;
    const q = "SELECT * FROM users WHERE access_id = ?";
    db.query(q, [access_id], (err, result) =>{
      if(err){
        console.err(err.message);
        res.status(500).send('Server error');
      } else {
        if (result.length === 0) {
          res.status(404).send('User not found');
        } else {
          const user = result[0];
          const userData = {
            name: user.name,
            position: user.position,
            role: user.role
          };
          return res.json(userData);
        }
      }
  });
});


//api for deleting a section from the database  
router.delete("/delete/:section_id", (req,res)=>{ //route still needs to be changed
  const sectionID = req.params.section_id
  const q = "DELETE FROM sections WHERE section_name = ? AND grade_level = ?"
  db.query(q, [sectionID], (err, data) =>{
      if(err) return res.json(err)
      return res.json("Section has been deleted succesfully")
  });
});

//api for changing a sections adviser
router.put("/update", (req,res)=>{ //route still needs to be changed
  const q = "UPDATE sections SET section_teacher = ? WHERE section_name = ? AND grade_level = ?"
  const values = [
      req.body['section_teacher'],
      req.body['section_name'],
      req.body['grade_level']
  ];

  db.query(q, values, (err, data) =>{
      if(err) return res.json(  err)
      return res.json("Section Adviser has been updated succesfully")
  })
})

//api for deleting a user from the database  
router.delete("/delete/:user_id", (req,res)=>{ //route still needs to be changed
  const userID = req.params.id
  const q = "DELETE FROM users WHERE access_id = ?"
  db.query(q, [userID], (err, data) =>{
      if(err) return res.json(err)
      return res.json("User has been deleted succesfully")
  });
});





//api for changing a users password 

// router.post("/update-password", (req,res)=>{ 
// const { newPassword, oldPassword, access_id } = req.body
// const query = "UPDATE users SET password = ? WHERE password = ? AND access_id = ?"
// db.query(query, [newPassword, oldPassword, access_id], (err, data) =>{
    
//     if(err){
//       return res.send("Server Error!")
//     } 
//     return res
//       .send("Password updated succesfully!");
//   });
// });

router.post("/update-password", (req, res) => {
  const { newPassword, oldPassword, access_id } = req.body;
  const selectQuery = "SELECT password FROM users WHERE access_id = ?";
  db.query(selectQuery, [access_id], (err, result) => {
    if (err) {
      return res.status(500).send("Server Error!");
    }
    if (result.length === 0) {
      return res.status(404).send("User not found!");
    }
    
    const dbPassword = result[0].password;
    if (dbPassword !== oldPassword) {
      return res.status(401).send("Old password is incorrect!");
    }
    const updateQuery = "UPDATE users SET password = ? WHERE access_id = ?";
    db.query(updateQuery, [newPassword, access_id], (err, data) => {
      if (err) {
        return res.status(500).send("Server Error!");
      }
      if (data.affectedRows === 0) {
        return res.status(500).send("Password update failed!");
      }
      return res.status(200).send("Password updated successfully!");
    });
  });
});

module.exports = router;