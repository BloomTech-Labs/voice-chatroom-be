exports.seed = async function(knex) {
	await knex("user_interests").insert([
		{ user_id: 2, category_id: 1, },
		{ user_id: 4, category_id: 2, },
		{ user_id: 1, category_id: 3, },
		
	])
}