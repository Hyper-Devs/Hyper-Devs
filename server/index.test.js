// const request = require('supertest');
// const app = require('./index.js');

// import mysql from 'mysql';
// import request from 'supertest';
// import app from './index.js';

const request = require("supertest");
const app = require("./app");

describe('API endpoints status code', () => {
    test('connected to mysql; should return a 200 status code', async () => {
        request(app)
        .get('/')
        .expect(200)
    });

    test('request for student list', async () => {
        request(app)
        .get("/students")
        .expect(200)
        // .expect('Content-Type', 'application/json; charset=utf-8')
    });

    test('request for student info by id', async () => {
        request(app)
        .get("/students/:id")
        .expect(200)
    });

    test('api for setting up grade levels and sections', async () => {
        request(app)
        .get("/enroll/available-rooms")
        .expect(200)
    });

    // describe('POST enroll student', () => {
    //   const enrollPayload = {
    //     "student-first-name": "James Peter",
    //     "student-middle-name": "Ybanez",
    //     "student-last-name": "Bravo",
    //     "student-grade-level": "11",
    //     "student-section": "Einstein",
    //     "guardian-first-name": "Elsie",
    //     "guardian-middle-name": "Ybanez",
    //     "guardian-last-name": "Bravo",
    //     "guardian-relationship": "mother",
    //     "guardian-contact-number": 9372547390
    //     }

    //     // afterAll(async () => {
    //     //     await request(app).delete(`/enroll/new-student ${enrollPayload}`)
    //     // })

    //     it("should enroll student", async () => {
    //         const response = (await request(app).post("/enroll/new-student")).setEncoding(enrollPayload);
    //         expect(response).toBe("Student has been enrolled succesfully");
    //     });

    // });
    

    // it('should return a 200 and enroll a student', async () => {
    //     const enrollPayload = {
    //         "student-first-name": "James Peter",
    //         "student-middle-name": "Ybanez",
    //         "student-last-name": "Bravo",
    //         "student-grade-level": "11",
    //         "student-section": "Einstein",
    //         "guardian-first-name": "Elsie",
    //         "guardian-middle-name": "Ybanez",
    //         "guardian-last-name": "Bravo",
    //         "guardian-relationship": "mother",
    //         "guardian-contact-number": 9372547390
    //     };

    //     afterAll(async ())

    // })

    test('api for enrolling a student', async () => {
        // const enrollmentData = {
        //     first_name: "James Peter",
        //     middle_name: "Ybanez",
        //     last_name: "Bravo",
        //     grade_level: "11",
        //     section_name: "Kolmogorov",
        //     parent_fn: "Elsie",
        //     parent_mn: "Ybanez",
        //     parent_ln: "Bravo",
        //     relationship: "Mother",
        //     contact_num: "09302537478",
        // };

        // const response = await request(app)
        //     .post('/enroll/new-student')
        //     .send(enrollmentData);
        request(app)
        .post('/enroll/new-student')
        .expect(200)
    });

    test('api for search filter in database', async () => {
        request(app)
        .get('/database/student-fiter')
        .expect(200)
    });

    test('api for retrieving student in the database page', async () => {
        request(app)
        .get('/database/student-filter/student/:student_prim_info/:school_year/:grade_level/:section_name')
        .expect(200)
    });

    test('api for deleting students in the database', async () => {
        request(app)
        .delete('/enrolled_students/:id')
        .expect(200)
    });

    test('api for fetching access id', async () => {
        request(app)
        .get('/users/:access_id')
        .expect(200)
    })
});

