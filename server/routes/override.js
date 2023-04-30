import express from "express";
import mysql from "mysql";
import cors from "cors";


const router = express.Router();
router.use(cors());
router.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "gans prototype",
  });


// api for displaying students using id
router.get("/:student_id", (request, response) => {
    const studentID = request.params.student_id
    const query = "SELECT * FROM students WHERE id = ?";
    db.query(query, [studentID], (err, data) => {
      if (err) {
        console.log(err);
        return response.json(err);
      }
      return response.json(data);
    });
});

router.post("/logs", (request, response) => {
  const query = "INSERT INTO override_logs (`Overrider_Name`, `Student_Name`, `Reason`, `Date`) VALUES (?)"
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

export default router;