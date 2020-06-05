exports.seed = async function (knex, promise) {
  // Deletes ALL existing entries
  await knex("users")
    .del()
    await knex.raw('ALTER SEQUENCE users_id_seq RESTART WITH 1')
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        {
          
          email: "supetest@test.com",
          given_name: "Test",
          family_name: "MctestFace",
          username: "that boi",
          location: "here",
          avatar: '',
          isMentor: true,
        },
        {
          
          email: "potato@potato.com",
          given_name: "Joe",
          family_name: "yeeterson",
          username: "someone",
          location: "there",
          avatar: '',
          isMentor: false,

        },
        {
         
          email: "fbi@government.com",
          given_name: "Agent",
          family_name: "007",
          username: "nottheFBI",
          location: "behind you",
          isMentor: true,
        },
      ]);
    });
};
