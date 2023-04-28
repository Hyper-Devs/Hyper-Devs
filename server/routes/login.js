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


router.get("/", async (req, res) => {
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

export default router;