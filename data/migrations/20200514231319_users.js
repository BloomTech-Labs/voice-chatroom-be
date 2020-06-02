exports.up = async function (knex, promise) {
  await knex.schema
    .createTable("users", (tbl) => {
    tbl.increments().unsigned().primary();
    tbl.string("email").unique().notNullable();
    tbl.string("given_name").notNullable();
    tbl.string("family_name").notNullable();
    tbl.string("username");
    tbl.string("location");
    tbl.string("createdAt");
    tbl.string("interest_1");
    tbl.string("interest_2");
    tbl.string("interest_3");
    tbl.string("avatar")
  });
};
exports.down = async function (knex, promise) {
  await knex.schema.dropTableIfExists("users");
};
