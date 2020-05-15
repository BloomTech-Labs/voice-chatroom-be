exports.up = async function (knex, promise) {
  await knex.schema.createTable("users", (tbl) => {
    tbl.increments().unsigned().primary();
    tbl.string("email").unique().notNullable();
    tbl.string("first_name").notNullable();
    tbl.string("last_name").notNullable();
  });
};
exports.down = async function (knex, promise) {
  await knex.schema.dropTableIfExists("users");
};
