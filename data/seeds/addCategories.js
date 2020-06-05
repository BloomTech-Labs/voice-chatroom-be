exports.seed = async function (knex, promise) {
    // Deletes ALL existing entries
    await knex("categories")
      .del()
      await knex.raw('ALTER SEQUENCE categories_id_seq RESTART WITH 1')
      .then(function () {
        // Inserts seed entries
        return knex("categories").insert([
          {
       
            category_name: 'tech'
          },

          {
            
            category_name: 'DIY'
          },

          {
            
            category_name: 'business'
          },
        ]);
      });
  };