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


module.exports ={
    findMentor,
    findMentorById,
    addMentor,
    updateMentor,
    removeMentor,
    
}

