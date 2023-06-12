const express = require('express');
const db = require('../database.js').databaseConnection;
const router = express.Router();
const jwt = require('jsonwebtoken');
require("dotenv").config();

// Check if there is no users in the database
router.get("/count", async (req, res) => {
  const query = "SELECT COUNT(*) as count FROM `users`";
  db.query(query, (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Internal server error" });
    }
    // console.log(data[0].count)
    return res.status(200).json({ count: data[0].count });
  });
});

// Register user
router.post("/register", async (req, res) => {
  const { register_name, register_id, register_password, register_position, register_role } = req.body;

  // Check if access ID is already registered
  const checkQuery = "SELECT * FROM `users` WHERE access_id = ?";
  db.query(checkQuery, [register_id], (err, result) => {
    if (err) {
      return res.status(500).json({ error: "Internal server error" });
    }
    if (result.length > 0) {
      return res.status(400).json({ error: "Access ID is already registered" });
    }

    // If access ID is not registered, insert the new user into the database
    const insertQuery = "INSERT INTO `users` (name, position, access_id, password, role) VALUES (?, ?, ?, ?, ?)";
    db.query(insertQuery, [register_name, register_position, register_id, register_password, register_role], (err, data) => {
      if (err) {
        return res.status(500).json({ error: "Internal server error" });
      }
      return res.status(201).json("User successfully registered!");
    });
  });
});

// Login User
router.post("/login", async (req, res) => {
  const { login_id, login_password } = req.body;
  const query = "SELECT * FROM `users` WHERE access_id = ? AND password = ?";
  db.query(query, [login_id, login_password], (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Internal server error" });
    }
    if (data.length === 1) {
      const accessToken = jwt.sign({ userId: data[0].id , name: data[0].name , AccessID: data[0].access_id , position: data[0].position, role: data[0].role}, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });
      return res.status(200).json({ accessToken });
    } else {
      return res.status(401).json({ error: "Invalid login credentials" });
    }
  });
});


// Token Verification
router.get("/", async (req, res) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) {
    return res.status(401).json({ error: "Access token not provided" });
  }
  jwt.verify(token, 'key', (err, decoded) => {
    if (err) {
      if(err.name === 'TokenExpiredError'){
        return res.status(401).json({ error: 'Access token has expired!'})
      } else {
        return res.status(403).json({ error: "Invalid access token" });
      }
    }
    const query = "SELECT * FROM `users` WHERE id = ?";
    db.query(query, [decoded.userId], (err, data) => {
      if (err) {
        return res.status(500).json({ error: "Internal server error" });
      }
      if (data.length === 1) {
        console.log(data[0])
        return res.status(200).json(data[0]);
      } else {
        return res.status(404).json({ error: "User not found" });
      }
    });
  });
});
module.exports=router;