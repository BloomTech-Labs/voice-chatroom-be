const db = require('../data/config')

function find(){
    return db('mentors')
}
// selects all users from users table

// Finds mentor by ID

function findById(id){
    return db('mentors')
    .where("id", id)
    // .limit(1)

}


// add new mentor
function add(mentor){
    return db('mentors')
    .insert(mentor)
}

// Update mentor
function update(changes, id){
    return db('mentors')
    .update(changes)
    .where("id", id)
}

// Delete mentor
function remove(id){
    return db('mentors')
    .del()
    .where("id", id)
}

// Adds new catgory (not mentor specific yet)
function addCategory(category){
    return db('categories')
    .insert(category, )
}

// Deletes category (not mentor specific yet)
function removeCategory(id){
    return db('categories')
    .del()
    .where("id", id)
}

module.exports ={
    find,
    findById,
    add,
    update,
    remove,
    addCategory,
    removeCategory,
}

