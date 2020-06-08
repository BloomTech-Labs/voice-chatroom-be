const db = require('../data/config')

function findMentor(){
    return db('mentors')
}
// selects all users from users table

// Finds mentor by ID

function findMentorById(id){
    return db('mentors')
    .where("id", id)
    // .limit(1)

}


// add new mentor
function addMentor(mentor){
    return db('mentors')
    .insert(mentor)
}

// Update mentor
function updateMentor(changes, id){
    return db('mentors')
    .update(changes)
    .where("id", id)
}

// Delete mentor
function removeMentor(id){
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



function getMentorCategories(id){
    
    return db('mentor_categories as mc')
        .innerJoin('mentors as m', 'mc.category_id', 'm.id' )
        .innerJoin('categories as c', 'mc.category_id', 'c.id')
        .select('c.category_name')
        .where('m.id', id)
}
module.exports ={
    findMentor,
    findMentorById,
    addMentor,
    updateMentor,
    removeMentor,
    addCategory,
    removeCategory,
    getMentorCategories,
}

