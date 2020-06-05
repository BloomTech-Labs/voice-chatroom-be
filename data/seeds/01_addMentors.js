exports.seed = async function (knex, promise) {
    // Deletes ALL existing entries
    await knex("mentors")
      .del()
      await knex.raw('ALTER SEQUENCE mentors_id_seq RESTART WITH 1')
      .then(function () {
        // Inserts seed entries
        return knex("mentors").insert([
          {
            mentor_id: 1,
            username: 'killme'
           
          },

          {
            
            username: 'bleh'

          },

          {
            
            username: 'blah'
          },
        ]);
      });
  };
