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
    return {'name':newString};
  }
  else { return {'id':string} }
};

function outputConditioner (student_prim_infoo, results, mode) {
  var searchVal, returnVal = "Student not found", studentPrimVal;
  const student_prim_info = student_prim_infoo;
  var logs = []
  if (/^\d+$/.test(student_prim_info)){ searchVal = 'id'; }  //student_prim_info parameter is an id
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


// api for displaying attendace logs using id
router.get("/:student_id", (request, response) => {
  var searchVal = stringInputConditioner(request.params.student_id);
  var query = "SELECT * FROM attendance_logs WHERE ", value = null;

  if (searchVal['name']){ query += 'student_name = ?';  value = searchVal['name']}
  else { query += 'rfid = ?'; value = searchVal['id']}

  db.query(query, [value], (error, data) => {
    if (error) { return response.json(error); }
    if (data.length > 0){
      const refinedValues = data.map((element) => {
        var date = new Date(element['date']);
        element['date'] = (date.getMonth() + 1) + '/' + date.getDate() + '/' +  date.getFullYear();
        return element
      })  
      return response.json(refinedValues)
    }
    return response.json(data);
  });
});

router.post("/logs", (request, response) => {
  const query = "INSERT INTO override_logs (`id`, `student_name`, `student_id`, `overriding_reason`, `overrider_name`, `overriding_date`) VALUES (?)"
  const values = [
      request.body['overrider-name'],
      request.body['student-name'],
      request.body['override-reason'],
      request.body['override-date'],
  ];

  db.query(query, [values], (err, data)=>{
      if(err) return response.json(err)
      return response.json("Override action recorded succesfully")
  });

});

module.exports = router;