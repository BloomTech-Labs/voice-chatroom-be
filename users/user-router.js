const express = require('express');
const userAuth =require('../auth/userAuth')
const Users = require('./user-model');

const router = express.Router({
    mergeParams: true,
});

// GET all users

router.get('/', userAuth, (req, res) =>{
    Users.find()
    .then(users =>{
        res.json(users);
    })
    .catch(err =>{
        res.status(500).json({
            message: 'Failed to get users'
        });
    });
});


// GET User by ID

router.get('/:id', (req, res) => {
    const { id } = req.params;
  
    Users.findById(id)
    .then(user => {
      if (user) {
        res.json(user);
      } else {
        res.status(404).json({ 
            message: 'Could not find user with given id.'
         })
      }
    })
     //  Error handling needs to be reviewed
    .catch(err => {
      res.status(500).json({ message: 'Failed to get users' });
      console.log(err)
    });
  });

  // Add User

router.post('/', (req, res) => {
  const userData = req.body;

  Users.add(userData)
  .then(userData => {
    res.status(201).json({message: 'User Created'});
  })
  .catch (err => {
    res.status(500).json({
         message: 'Failed to create new user'
         
         });
         console.log(err)
  });
});

// Edit User

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;
  
    Users.findById(id)
    .then(user => {
      if (user) {
        Users.update(changes, id)
        .then(updatedUser => {
          res.json(updatedUser);
        });
        // Need to check error handling
      } else {
        res.status(404).json({
             message: 'Could not find user with given id' 
            });
      }
    })
    .catch (err => {
      res.status(500).json({
           message: 'Failed to update user' 
        });
    });
  });
  
  // Delete User
  router.delete('/:id', (req, res) => {
    const { id } = req.params;
  
    Users.remove(id)
    .then(deleted => {
      if (deleted) {
        res.json({ removed: deleted });
      } else {
        res.status(404).json({
             message: 'Could not find user with given id' 
            });
      }
    })
    .catch(err => {
      res.status(500).json({
           message: 'Failed to delete user' 
        });
    });
  });
//                                      Mentor and Category Routes
  // make mentor
  router.put('/:id/mentor', (req, res) => {
    const { id } = req.params;
  
    Users.findById(id, (err, foundUser ) =>{
      console.log(foundUser.isMentor);
      if (err){
        console.log(err);
      } else if (foundUser.isMentor !==true) {
        Users.update({_id: req.params.id}, {$set: {isMentor: true}});

      }
      else {
        Users.update({_id: req.params.id}, {$set: {isMentor: false}});
      }
      return(foundUser)
    });
     //  Error handling needs to be reviewed
     
  });

  // router.get('/mentor/:id', (req, res) =>{
  //   const { id } = req.params;

  //   Users.findById(id, (user) =>{
  //     console.log(user)
  //   })
  // })
module.exports = router;