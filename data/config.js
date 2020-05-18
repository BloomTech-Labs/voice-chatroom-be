const knex = require("knex");
const environment = process.env.NODE_ENV || "development";
const knexfile = require("../knexfile");

console.log(environment)
module.exports = knex(knexfile[environment]);