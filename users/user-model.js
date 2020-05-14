const db = require('../data/config')

function find(){
    return db("users")
}
// selects all users from users table

function findById(id){
    return db("users")
    .where("Id", id)
    // .limit(1)

}
// Matches ID value within users table

function add(user){
    return db("users")
    .insert(user, )
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

module.exports ={
    find,
    findById,
    add,
    update,
    remove,
}

