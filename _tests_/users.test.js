const request = require("supertest");
const server = require("../app");
const db = require('../data/config')

beforeEach(async () => {
  await  db('users').del().whereBetween('id', [1,100])// This is deleting users in table
})
// afterEach(() => {

// })

test("creating a user", async () => {
  await request(server)
    .post("/users")
    .send({
      email: "happy@testing.org",
      first_name: "MC",
      last_name: "Hammer",
    })
    .expect(201);
});

test("Should log in user", async () => {
    await request(server).post("/users")
})