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
          given_name: "Test",
          family_name: "MctestFace",
        },
        {
          id: 2,
          email: "potato@potato.com",
          given_name: "Joe",
          family_name: "yeeterson",
        },
        {
          id: 3,
          email: "fbi@government.com",
          given_name: "Agent",
          family_name: "007",
        },
      ]);
    });
};
