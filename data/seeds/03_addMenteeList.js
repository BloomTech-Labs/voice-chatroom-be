exports.seed = async function(knex) {
	await knex("mentee_list").insert([
		{ user_id: 2,  mentor_id: 1, },
		{ user_id: 4, mentor_id: 2, },
		{ user_id: 1,  mentor_id: 3, },
		
	])
}
