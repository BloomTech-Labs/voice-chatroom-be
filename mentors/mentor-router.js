const express = require('express');
const userAuth =require('../auth/userAuth')
const Mentors = require('./mentor-model');


const router = express.Router({
    mergeParams: true,
});


    //                                   Mentor Routes
    
// GET all mentors
router.get('/', userAuth, (req, res) =>{
    Mentors.findMentor()
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
  
    Mentors.findMentorById(id)
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

router.post('/', (req, res) => {
  const mentorData = req.body;
  const { id } = req.params;

  Mentors.addMentor(mentorData)
  .then(mentor => {
    res.status(201).json(mentorData);
  })
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
  
    Mentors.findMentorById(id)
    .then(mentor => {
      if (mentor) {
        Mentors.updateMentor(changes, id)
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
  
    Mentors.removeMentor(id)
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

  // Get Mentor Categories by ID

   router.get('/:id/categories', async (req, res) =>{
    const { id } = req.params;

    await Mentors.findMentorById(id)
    .then(user =>{
      const {category_1, category_2, category_3} = user[0]
      res.status(200).json({
        category_1,
        category_2,
        category_3
      })
     
    })
    .catch (err =>{
      res.status(500).json({
        message: 'Failed to get mentor categories.'
      });
      console.log(err)
    });
  })
 


module.exports = router;