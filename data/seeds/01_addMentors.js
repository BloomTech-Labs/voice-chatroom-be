exports.seed = async function (knex, promise) {
    // Deletes ALL existing entries
    await knex("mentors")
      .del()
      await knex.raw('ALTER SEQUENCE mentors_id_seq RESTART WITH 1')
      .then(function () {
        // Inserts seed entries
        return knex("mentors").insert([
          {
          //  1
            mentor_name: 'thatboi'
           
          },

          {
            // 2
            mentor_name: 'nottheFBI'

          },

          {
            // 3
            mentor_name: 'ForrestGump'
          },
        ]);
      });
  };
