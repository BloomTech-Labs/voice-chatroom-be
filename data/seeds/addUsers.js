exports.seed = async function (knex, promise) {
  // Deletes ALL existing entries
  await knex("users")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        {
          id: 1,
          email: "supetest@test.com",
          first_name: "Test",
          last_name: "MctestFace",
        },
        {
          id: 2,
          email: "potato@potato.com",
          first_name: "Joe",
          last_name: "yeeterson",
        },
        {
          id: 3,
          email: "fbi@government.com",
          first_name: "Agent",
          last_name: "007",
        },
      ]);
    });
};
