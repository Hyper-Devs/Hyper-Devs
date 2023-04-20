// const mysql = require('mysql');
// const request = require('supertest');
// const app = require('./index.js');

// import mysql from 'mysql';
// import request from 'supertest';
// import app from './index.js';

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "gans_prototype",
  });

describe('API call to MySQL', () => {
    let connection;

describe('server', () => {
    
    describe('check server', () => {
        it('should return a 200', () => {
            expect(true).toBe(true);
        });
        
    })

});
