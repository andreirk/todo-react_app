const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const config = require('config');
const User = require('../models/user.model');

router.post('/', (req, res) => {

  const errors = {};
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({email})
    .then(user => {
      if(!user) {
        errors.email = 'User not found';
        return res.status(404).json(errors);
      }

      user.checkPassword(password)
        .then(isMatch => {
          if(isMatch) {
            const payload = {
              id: user.id,
              name: user.name,
              avatar: user.avatar
            }
            jwt.sign(payload, config.get('secret'), {
              expiresIn: config.get('jwt.expiration_time')
            }, (err, token) => {
              if(err) console.error('There is some error in token', err);
              else {
                res.json({
                  success: true,
                  token: `Bearer ${token}`
                });
              }
            });
          }
          else {
            errors.password = 'Incorrect Password';
            return res.status(400).json(errors);
          }
        });
    });
});


module.exports = router;
