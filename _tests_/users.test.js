// const request = require("supertest");
// const server = require("../app");
// const db = require('../data/config')

// beforeEach(async () => {
//   await  db('users').del().whereBetween('id', [1,100])// This is deleting users in table
// })
// // afterEach(() => {

// // // })

// test("creating a user", async () => {
//   await request(server)
//     .post("/users")
//     .send({
//       email: "happy@testing.org",
//       first_name: "MC",
//       last_name: "Hammer",
//     })
//     .expect(201);
// });

// test("Should log in user", async () => {
//     await request(server).post("/users")
// })

const app = require('../app')
const supertest = require('supertest')
const request = supertest(app)
const knex = require('knex')(config);

it('Gets the welcome endpoint', async done =>{
  const response = await request.get('/')

  expect(response.status).toBe(200)
  expect(response.body.message).toBe('Nice.')
  done()
})




describe('test suite description', () => {
  beforeAll(() => {
    return knex.migrate.latest();
    return knex.seed.run()
  });
  afterAll(() => {
    return knex.migrate
      .rollback()
      .then(() => knex.destroy());
  });

  test('test 1', () => {
    // testing stuff
  });
  test('test 2', () => {
    // testing other stuff
  });
});