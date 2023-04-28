import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "gans prototype",
});


app.get("/", async (req, res) => {
  const { login_id, login_password } = req.query;
  const query = "SELECT * FROM `users` WHERE access_id = ? AND password = ?";
  var authStatus; //201 = fail, 202 = success
  db.query(query, [login_id, login_password], (err, data) => {
    if (err) {
      return res.json("Login Failed");
    }
    if(data.length == 1){
      authStatus = 202
    }
    else if (data.length == 0){
      authStatus = 201
    }

    return res
      .status(authStatus)
      .json(data);
  });
});

//api for displaying all students
app.get("/students", (req, res) => {
  const q = "SELECT * FROM students";
  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});

// api for displaying students using id
app.get("/students/:id", (req, res) => {
  const studentID = req.params.id
  const q = "SELECT * FROM students WHERE id = ?";
  db.query(q, [studentID], (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});

//API for setting up the grade levels and sections in the Database page
app.get("/enroll/available-rooms", async (request, response) => {
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
app.post("/enroll/new-student", (request, response)=>{
  // issue: deal with duplicates
  // another concern: add a mechanism where the server supplies some string when middle name is not given
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
});

//API for setting up the search filters in the Database page
app.get("/database/student-filter", async (request, response) => {
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

//API for retrieving students in the Database page
app.get("/database/student-filter/student/:student_prim_info/:school_year/:grade_level/:section_name", (request, response) => {
  const query = `SELECT students.id, students.first_name, students.middle_name, students.last_name, students.grade_level, students.section_name, sections.school_year
              FROM students,sections
              WHERE students.grade_level = sections.grade_level AND students.section_name = sections.section_name 
              AND sections.school_year = ? AND students.grade_level = ? AND students.section_name = ?`;
  const values = [request.params.school_year, request.params.grade_level, request.params.section_name];

  db.query(query, values, (error, data) => {
    if (error) { return response.json(error); }

    //the task here is to further refine the query results by using the given ID or name
    var searchVal, returnVal;
    const student_prim_info = request.params.student_prim_info;
    if (/^\d+$/.test(student_prim_info))  searchVal = 'id';     //student_prim_info parameter is an ID  
    else  searchVal = 'first_name'                              //student_prim_info parameter is a name

    for(let i=0; i<data.length; i++){
      var testCases = [];
      testCases.push(data[i][searchVal]+' '+data[i]['last_name'] == student_prim_info);
      testCases.push(data[i]['last_name'] == student_prim_info);
      testCases.push(data[i][searchVal] == student_prim_info);

      if (testCases.includes(true)){
        returnVal = data[i];
        break;
      }
    }

    return response.json(returnVal)
  });
});









//a potential scrap api
app.delete("/books/:id", (req, res) => {
  const bookId = req.params.id;
  const q = " DELETE FROM books WHERE id = ? ";

  db.query(q, [bookId], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

//api for deleting a student from the database *requires actual testing*
app.delete("/enrolled_students/:id", (req,res)=>{
  const studentID = req.params.id
  const q = "DELETE FROM enrolled_students WHERE id = ?"
  db.query(q, [studentID], (err, data) =>{
      if(err) return res.json(err)
      return res.json("Student has been deleted succesfully")
  })
})

app.get("/users/:access_id", (request, response) => {
  const accessId = request.params.access_id
  const query = ""
});


app.put("/books/:id", (req, res) => {
  const bookId = req.params.id;
  const q = "UPDATE books SET `title`= ?, `desc`= ?, `price`= ?, `cover`= ? WHERE id = ?";

  const values = [
    req.body.title,
    req.body.desc,
    req.body.price,
    req.body.cover,
  ];

  db.query(q, [...values,bookId], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.listen(8800, () => {
  console.log("Connected to backend.");
});

// module.exports=app;
export default app;