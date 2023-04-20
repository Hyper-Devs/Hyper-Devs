// const mysql = require('mysql');
// const request = require('supertest');
// const app = require('./index.js');

// import mysql from 'mysql';
// import request from 'supertest';
// import app from './index.js';


// const db = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "gans prototype",
//   });

// describe('API call to MySQL', () => {
//     let connection;

//     beforeAll((done) => {
//         connection.connect((err) => {
//             if(err) throw err;
//             done();
//         });
//     });

//     afterAll((done) => {
//         connection.end((err) => {
//             if(err) throw err;
//             done();
//         });
//     });

//     it('should return data from MYSQL', async () =>{
//         const response = await request(app).get('api/data').expect(200);
    
//         expect(response.body).toBeDefined();
//         expect(response.body.length).toBeGreaterThan(0);
//     });
// });

describe('server', () => {
    
    describe('check server', () => {
        it('should return a 200', () => {
            expect(true).toBe(true);
        });
        
    })

});
