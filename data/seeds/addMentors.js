exports.seed = async function (knex, promise) {
    // Deletes ALL existing entries
    await knex("mentors")
      .del()
      await knex.raw('ALTER SEQUENCE mentors_id_seq RESTART WITH 1')
      .then(function () {
        // Inserts seed entries
        return knex("mentors").insert([
          {
            
            mentor_id: "supetest@test.com",
           
          },

          {
           
            mentor_id: "potato@potato.com",
           
          },

          {
            
            mentor_id: "fbi@government.com",
          },
        ]);
      });
  };
  