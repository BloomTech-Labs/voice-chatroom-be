exports.seed = async function (knex, promise) {
  // Deletes ALL existing entries
  await knex("users")
    .del()
    await knex.raw('ALTER SEQUENCE users_id_seq RESTART WITH 1')
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        {
        //  1
          email: "supetest@test.com",
          given_name: "Test",
          family_name: "MctestFace",
          username: "that boi",
          location: "here",
          avatar: '',
          isMentor: true,
        },
        {
        //  2
          email: "potato@potato.com",
          given_name: "Joe",
          family_name: "yeeterson",
          username: "someone",
          location: "there",
          avatar: '',
          isMentor: false,

        },
        {
        // 3
          email: "fbi@government.com",
          given_name: "Agent",
          family_name: "007",
          username: "nottheFBI",
          location: "behind you",
          isMentor: true,
        },

        {
          //4 
          email: "managerslayer@aol.com",
          given_name: "karen",
          family_name: "jones",
          username: "spk2mgrplz",
          location: "store near you",
          avatar: '',
          isMentor: false,

        },

        {
         //5 
          email: "randomguy@aol.com",
          given_name: "Forrest",
          family_name: "gump",
          username: "ForrestGump",
          location: "running!",
          avatar: '',
          isMentor: true,

        },
        

      ]);
    });
};
