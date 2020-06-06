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

    // user info to carry over?
    tbl.string('email')
    tbl.string('given_name')
    tbl.string('family_name')
    tbl.string('username')
    tbl.string('location');
    tbl.binary('avatar')
    tbl.timestamp('created_at').defaultTo(knex.fn.now())
    // mentor specific --new fields
    tbl.string('mentor_name').unique()
    tbl.string('category_1')
    tbl.string('category_2')
    tbl.string('category_3')
    tbl.string('mentor_rating');
    tbl.text('mentor_bio');
  })

  // MENTOR Categories --needs work
  .createTable('mentor_categories', tbl =>{
   
    tbl.integer('mentor_id')
    .references('id')
    .inTable('mentors')
    .onUpdate('CASCADE')
    .onDelete('CASCADE')

    tbl.integer('category_id')
    .references('id')
    .inTable('categories')
    .onUpdate('CASCADE')
    .onDelete('CASCADE')

    tbl.string('category_name')
    .references('category_name')
    .inTable('categories')
    .onUpdate('CASCADE')
    .onDelete('CASCADE')

    tbl.primary(["mentor_id", "category_id"])
  })

  // USER Categories --needs work
  .createTable('user_interests', tbl =>{
    
    tbl.integer('user_id')
    .references('id')
    .inTable('users')
    .onUpdate('CASCADE')
    .onDelete('CASCADE')

    tbl.integer('category_id')
    .references('id')
    .inTable('categories')
    .onUpdate('CASCADE')
    .onDelete('CASCADE')

    tbl.string('category_name')
    .references('category_name')
    .inTable('categories')
    .onUpdate('CASCADE')
    .onDelete('CASCADE')

    tbl.primary(["user_id", "category_id"])
  })

  // MENTOR'S MENTEE LIST
  .createTable('mentee_list', tbl =>{
  
    tbl.integer('user_id')
    .references('id')
    .inTable('users')
    .onUpdate('CASCADE')
    .onDelete('CASCADE')
    
    tbl.string('user_name')
    .references('username')
    .inTable('users')
    .onUpdate('CASCADE')
    .onDelete('CASCADE')

    tbl.integer('mentor_id')
    .references('id')
    .inTable('mentors')
    .onUpdate('CASCADE')
    .onDelete('CASCADE')

    tbl.string('mentor_name')
    .references('mentor_name')
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
