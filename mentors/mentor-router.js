const express = require('express');
const userAuth =require('../auth/userAuth')
const Mentors = require('./mentor-model');
const Users = require('../users/user-model');

const router = express.Router({
    mergeParams: true,
});


    //                                   Mentor Routes
    
// GET all mentors
router.get('/', userAuth, (req, res) =>{
    Mentors.find()
    .then(mentors =>{
        res.json(mentors);
    })
    .catch(err =>{
        res.status(500).json({
            message: 'Failed to get mentors'
        });
    });
});


// GET Mentor by ID
router.get('/:id', (req, res) => {
    const { id } = req.params;
  
    Mentors.findById(id)
    .then(mentor => {
      if (mentor) {
        res.json(mentor);
      } else {
        res.status(404).json({ 
            message: 'Could not find mentor with given id.'
         })
      }
    })
     //  Error handling needs to be reviewed
    .catch(err => {
      res.status(500).json({ message: 'Failed to get mentors' });
      console.log(err)
    });
    
  });

//   add new mentor

router.put('/:id', (req, res) => {
  const mentorData = req.body;
  const { id } = req.params;

  Users.findById(id)
  .then(user =>{
    console.log(user)
    if(user)
    Users.makeMentor(true, id)
    res.status(200).json(user)
  })
  
  // Mentors.add(mentorData)
  // .then(mentor => {
  //   res.status(201).json(mentorData);
  // })
  .catch (err => {

    res.status(500).json({
         message: 'Failed to create new mentor'
         });
         console.log(err)
  });
});


//   update mentor
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;
  
    Mentors.findById(id)
    .then(mentor => {
      if (mentor) {
        Mentors.update(changes, id)
        .then(updatedMentor => {
          res.json(updatedMentor);
        });
        // Need to check error handling
      } else {
        res.status(404).json({
             message: 'Could not find mentor with given id' 
            });
      }
    })
    .catch (err => {
      res.status(500).json({
           message: 'Failed to update mentor' 
        });
    });
  });
  
//   delete mentor
  router.delete('/:id', (req, res) => {
    const { id } = req.params;
  
    Mentors.remove(id)
    .then(deleted => {
      if (deleted) {
        res.json({ removed: deleted });
      } else {
        res.status(404).json({
             message: 'Could not find mentor with given id' 
            });
      }
    })
    .catch(err => {
      res.status(500).json({
           message: 'Failed to delete mentor' 
        });
    });
  });

//                                      Category Routes
  // add category
router.post('/categories', (req, res) => {
    const categoryData= req.body;
  
    Mentors.addCategory(categoryData)
    .then(mentor => {
      res.status(201).json(categoryData);
    })
    .catch (err => {
      res.status(500).json({
           message: 'Failed to create new category'
           
           });
           console.log(err)
    });
  });

//   delete category (not mentor specific)
  router.delete('/categories/:id', (req, res) => {
    const { id } = req.params;
  
    Mentors.removeCategory(id)
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

module.exports = router;