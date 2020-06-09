const express = require('express');
const userAuth =require('../auth/userAuth')
const Cats = require('./categoryModel');

const router = express.Router({
    mergeParams: true,
});


    //                                   categories Routes
    
// GET all categories
router.get('/', userAuth, (req, res) =>{
    Cats.findCat()
    .then(cats =>{
        res.json(cats);
    })
    .catch(err =>{
        res.status(500).json({
            message: 'Failed to get categories'
        });
    });
});


// GET Category by ID
router.get('/:id', (req, res) => {
    const { id } = req.params;
  
    Cats.findCatById(id)
    .then(cats => {
      if (cats) {
        res.json(cats);
      } else {
        res.status(404).json({ 
            message: 'Could not find category with given id.'
         })
      }
    })
     //  Error handling needs to be reviewed
    .catch(err => {
      res.status(500).json({ message: 'Failed to get Categories' });
      console.log(err)
    });
    
  });

//   add new categories

router.post('/', (req, res) => {
  const catsData = req.body;
  
  Cats.addCat(catsData)
  .then(cats => {
    res.status(201).json(catsData);
  })
  .catch (err => {

    res.status(500).json({
         message: 'Failed to create new Categories'
         });
         console.log(err)
  });
});


//   update categories
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;
  
    Cats.findCatById(id)
    .then(cats => {
      if (cats) {
        Cats.updateCat(changes, id)
        .then(updatedcats => {
          res.json(updatedcats);
        });
        // Need to check error handling
      } else {
        res.status(404).json({
             message: 'Could not find cats with given id' 
            });
      }
    })
    .catch (err => {
      res.status(500).json({
           message: 'Failed to update categories' 
        });
    });
  });
  
//   delete categories
  router.delete('/:id', (req, res) => {
    const { id } = req.params;
  
    Cats.removeCat(id)
    .then(deleted => {
      if (deleted) {
        res.json({ removed: deleted });
      } else {
        res.status(404).json({
             message: 'Could not find category with given id' 
            });
      }
    })
    .catch(err => {
      res.status(500).json({
           message: 'Failed to delete category' 
        });
    });
  });

//                                     


module.exports = router;