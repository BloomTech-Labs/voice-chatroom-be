


require("dotenv").config();
const app = require('../app')
const supertest = require('supertest')
const request = supertest(app)
const db = require('../data/config')

beforeEach(async () => {
	await db.seed.run()
})

afterAll(async () => {
	await db.destroy()
})

// Testing the welcome endpoint

it('Gets the welcome endpoint', async done =>{
  const response = await request.get('/')

  expect(response.status).toBe(200)
  expect(response.body.message).toBe('Nice.')
  done()
})



// TEST adding new user
describe('POST /users',  function () {



  let data = {
      "given_name": "MCo",
      "family_name": "Hammerz",
      "email": "dummyfd@test.com"
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


// TESTS getting a user by ID
describe('GET /user/:id', function () {
  it('respond with json containing a single user', function (done) {
      supertest(app)
          .get('/users/2')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200, done);
  });
});

// TEST adding new mentor
describe('POST /mentors', function () {
 
  let data = {
      "mentor_name": "reeees",
      "mentor_rating": 3,
      "category_1": "cookinga"
  }
  
  it('respond with 201 created', function (done) {
      supertest(app)
          .post('/mentors')
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

// TEST editing user
describe('PUT /users/:id',  function () {



  let data = {
      "given_name": "Mc",
      "family_name": "Hammerzo",
      "email": "dummyfda@test.com"
  }
  
  it('respond with 200 OK', function (done) {
      supertest(app)
          .put('/users/1')
          .send(data)
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end((err) => {
              if (err) return done(err);
              done();
          });
  });
});


// TEST deleting a user
describe('DELETE /users/:id',  function () {

  it('respond with 200 OK', function (done) {
      supertest(app)
          .delete('/users/1')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end((err) => {
              if (err) return done(err);
              done();
          });
  });
});


// // * Testing get a user endpoint by giving a non-existing user
// //  */

// describe('GET /user/:id', function () {
//     it('respond with json message "Could not find user with given id."', function (done) {
//         supertest(app)
//             .get('/users/10000')
//             .set('Accept', 'application/json')
//             .expect('Content-Type', /json/)
//             .expect(404) //expecting HTTP status code
//             .expect('"could not find user with given id."') // expecting content value
//             .end((err) => {
//                 if (err) return done(err);
//                 done();
//             });
//     });
// });