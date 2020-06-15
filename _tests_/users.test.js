// const request = require("supertest");
// const server = require("../app");
// const db = require('../data/config')

// beforeEach(async () => {
//   await  db('users').del().whereBetween('id', [1,100])// This is deleting users in table
// })
// // afterEach(() => {

// // // })


require("dotenv").config();
const app = require('../app')
const supertest = require('supertest')
const request = supertest(app)
const knex = require('../knexfile');



it('Gets the welcome endpoint', async done =>{
  const response = await request.get('/')

  expect(response.status).toBe(200)
  expect(response.body.message).toBe('Nice.')
  done()
})




// test("Should log in user", async () => {
//     await request(request).post("/users")
// })
// 
describe('POST /users', function () {

  let data = {
      "given_name": "MCd",
      "family_name": "Hammer",
      "email": "dummys@test.com"
  }
  
  it('respond with 201 created', function (done) {
      supertest(app)
          .post('/users')
          .send(data)
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(201)
          .end((err) => {
              if (err) return done(err);
              done();
          });
  });
});

describe('GET /user/:id', function () {
  it('respond with json containing a single user', function (done) {
      supertest(app)
          .get('/users/1')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200, done);
  });
});
