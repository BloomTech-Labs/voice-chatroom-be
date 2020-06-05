const db = require('../data/config')

function find(){
    return db("users")
}
// selects all users from users table

function findById(id){
    return db("users")
    .where("id", id)
    // .limit(1)

}
// Matches ID value within users table

function add(user){
    return db("users")
    .insert(user)
}

function update(changes, id){
    return db("users")
    .update(changes)
    .where("id", id)
}

function remove(id){
    return db("users")
    .del()
    .where("id", id)
}

function makeMentor(id){
    return db("users")
    .where("id", id)
    .where({
        isMentor: false,
    }).update(true)
}



function getUserInterests(id){
    
    return db('user_interests as ui')
        .innerJoin('users as u', 'ui.category_id', 'u.id' )
        .innerJoin('categories as c', 'ui.category_id', 'c.id')
        .select('c.category_name')
        .where('u.id', id)
}

function addInterest(category){
    return db("user_interests as ui")
        .innerJoin('users as u', 'ui.category_id', 'u.id')
        .innerJoin('categories as c', 'ui.category_id', 'c.id')
        .insert('c.category_id')
        .where('u.id', id)
    
}

module.exports ={
    find,
    findById,
    add,
    update,
    remove,
    makeMentor,
    getUserInterests
}

