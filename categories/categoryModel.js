const db = require('../data/config')

function findCat(){
    return db("categories")
}
// selects all categories from categories table

function findCatById(id){
    return db("categories")
    .where("id", id)
    // .limit(1)

}
// Matches ID value within categories table

function addCat(cat){
    return db("categories")
    .insert(cat)
}

function updateCat(changes, id){
    return db("categories")
    .update(changes)
    .where("id", id)
}

function removeCat(id){
    return db("categories")
    .del()
    .where("id", id)
}



function getUserInterests(id){
    
    return db('cat_interests as ui')
        .innerJoin('categories as u', 'ui.category_id', 'u.id' )
        .innerJoin('categories as c', 'ui.category_id', 'c.id')
        .select('c.category_name')
        .where('u.id', id)
}

function addInterest(category){
    return db("cat_interests as ui")
        .innerJoin('categories as u', 'ui.category_id', 'u.id')
        .innerJoin('categories as c', 'ui.category_id', 'c.id')
        .insert('c.category_id')
        .where('u.id', id)
    
}

module.exports ={
    findCat,
    findCatById,
    addCat,
    updateCat,
    removeCat,
    getUserInterests
}
