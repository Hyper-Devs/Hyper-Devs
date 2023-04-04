import express from "express";
import mysql from "mysql";
import cors from "cors";
import { useState } from "react";

const app = express();
app.use(cors());
app.use(express.json());


const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "gans prototype",
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

app.get("/", async (req, res) => {
  const { login_id, login_password } = req.query;
  const query = "SELECT * FROM `users` WHERE access_id = ? AND password = ?";
  var authStatus = 201;
  db.query(query, [login_id, login_password], (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    if(data.length > 0){
      authStatus = 202
    }

    return res
      .status(authStatus)
      .json(data);
  });
});

//a potential scrap api
app.post("/addstuds", (req, res) => {
  const q = "INSERT INTO register(`firstname`, `lastname`, `username`, `year`, `mobile`, `password`) VALUES (?)";

  const values = [
    req.body.firstname,
    req.body.lastname,
    req.body.username,
    req.body.year,
    req.body.mobile,
    req.body.password
  ];

  db.query(q, [values], (err, data) => {
    if (err) return res.send(err);
    return res.json("Student has been enrolled");
  });
});

//api for adding a student into the database *requires actual testing*
app.post("/new_student", (req, res)=>{
  const q = "INSERT INTO enrolled_students (`id`, `first_name`, `middle_name`, `last_name`, `age`, `sex`, `birthdate`, `grade_level`, `section`, `parent_fn`, `parent_mn`, `parent_ln`, `relationship`, `contact_num`) VALUES (?)"
  const values = [
      req.body.id,
      req.body.first_name,
      req.body.middle_name,
      req.body.last_name,
      req.body.age,
      req.body.sex,
      req.body.birthdate,
      req.body.grade_level,
      req.body.section,
      req.body.parent_fn,
      req.body.parent_mn,
      req.body.parent_ln,
      req.body.relationship,
      req.body.contact_num,
  ];
  db.query(q, [values], (err, data)=>{
      if(err) return res.json(err)
      return res.json("Student has been enrolled succesfully")
  })
})

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