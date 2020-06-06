exports.seed = async function (knex, promise) {
    // Deletes ALL existing entries
    await knex("categories")
      .del()
      await knex.raw('ALTER SEQUENCE categories_id_seq RESTART WITH 1')
      // forces auto incrementing ID in PGQL
      .then(function () {
        // Inserts seed entries
        return knex("categories").insert([
          {
            category_name: 'tech' //1
          },

          {
            category_name: 'DIY' //2
          },

          {
            category_name: 'business' //3
          },

          {
            category_name: 'mechanics' //4
          },

          {
            category_name: 'fitness' //5
          },

          {
            category_name: 'surveillance' //6
          },

        ]);
      });
  };