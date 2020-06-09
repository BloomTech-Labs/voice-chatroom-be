exports.up = async function (knex, promise) {
  await knex.schema
  // user table
    .createTable('users', (tbl) => {
    tbl.increments('id').unsigned().primary();
    tbl.string('email').unique().notNullable();
    tbl.string('given_name').notNullable();
    tbl.string('family_name').notNullable();
    tbl.string('username').unique()
    tbl.string('location');
    tbl.string('interest_1');
    tbl.string('interest_2');
    tbl.string('interest_3');
    tbl.timestamp('created_at').defaultTo(knex.fn.now());
    tbl.binary('avatar');
    tbl.boolean('isMentor')
    .defaultTo(false);
    tbl.text('user_bio')
    tbl.integer('user_rating')
  })
  
  // Categories table
  .createTable('categories', tbl =>{
    tbl.increments('id')
    .unsigned()
    .primary()
    tbl.string('category_name')
    .unique()
    .notNullable()

  }
  )

  // Mentor table
  .createTable('mentors', tbl =>{
    tbl.increments('id')
    .unsigned()
    .primary()

    tbl.integer('mentor_id')
    .unsigned()
    .references('id')
    .inTable('users')
    .onUpdate('CASCADE')
    .onDelete('CASCADE');

    tbl.string('mentor_name').unique()
    tbl.string('category_1')
    tbl.string('category_2')
    tbl.string('category_3')
    tbl.string('mentor_rating');
    tbl.text('mentor_bio');
  })


  // MENTOR'S MENTEE LIST
  .createTable('mentee_list', tbl =>{
  
    tbl.integer('user_id')
    .references('id')
    .inTable('users')
    .onUpdate('CASCADE')
    .onDelete('CASCADE')
    
    tbl.integer('mentor_id')
    .references('id')
    .inTable('mentors')
    .onUpdate('CASCADE')
    .onDelete('CASCADE')

    tbl.primary(["user_id", "mentor_id"])
  })
  
};

exports.down = async function (knex, promise) {
  await knex.schema
  
  .dropTableIfExists('mentee_list')
  .dropTableIfExists('user_interests')
  .dropTableIfExists('mentor_categories')
  .dropTableIfExists('mentors')
  .dropTableIfExists('users')
  .dropTableIfExists('categories')
}
