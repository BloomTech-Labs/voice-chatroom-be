const db = require("../data/config");

function find() {
	return db("users");
}
// selects all users from users table

function findById(id) {
	return db("users").where("id", id);
	// .limit(1)
}
// Matches ID value within users table

function findByEmail(email) {
	return db("users").where("email", email);
}

function add(user) {
	return db("users").insert(user);
}

function update(changes, id) {
	return db("users").update(changes).where("id", id);
}

function remove(id) {
	return db("users").del().where("id", id);
}

function makeMentor(changes, id) {
	return db("users").where("id", id).update(changes);
}

module.exports = {
	find,
	findById,
	add,
	update,
	remove,
	makeMentor,
	findByEmail,
};
