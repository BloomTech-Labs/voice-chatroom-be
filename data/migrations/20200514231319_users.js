exports.up = async function (knex, promise) {
  await knex.schema
    .createTable('users', (tbl) => {
    tbl.increments().unsigned().primary();
    tbl.string('email').unique().notNullable();
    tbl.string('given_name').notNullable();
    tbl.string('family_name').notNullable();
    tbl.string('username');
    tbl.string('location');
    tbl.timestamp('created_at', { useTz: true });
    tbl.string('interest_1');
    tbl.string('interest_2');
    tbl.string('interest_3');
    tbl.binary('avatar');
    tbl.boolean('isMentor').defaultTo(false);
  })
  .createTable('mentors', tbl =>{
    tbl.increments().unsigned().primary();
    tbl.string('category_1');
    tbl.string('category_2');
    tbl.string('category_3');
    tbl.string('mentor_rating');
    tbl.string('mentee_list')
    .unsigned()
    .references('email')
    .inTable('users');
    
  })
};
exports.down = async function (knex, promise) {
  await knex.schema
  .dropTableIfExists('users')
  .dropTableIfExists('mentors');
};
