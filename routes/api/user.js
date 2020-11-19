const express = require('express');
const router  = express.Router();

//El schema de mongo
const User = require('../../models/User');

//Peticion de tipo GET a todos los usuarios
router.get('/users', (req, res) => {
    User.find((err, users) => {
      if (err) throw err;
      res.status(200).json(users);
    });
  });
  
  //Peticion de tipo GET a un usuario por ID
  router.get('/user/:id', (req, res) => {
    User.findOne({ id: req.params.id }, (err, user) => {
      if (err) throw err;
      res.status(200).json(user);
    });
  });
  

module.exports = router;