const express = require('express');
const router = express.Router();
const User = require('../models/user.model');
const sendMail = require('../libs/sendMail');
const config = require('config');
const uuid4 = require('uuid4');

router.post('/', async (req, res) => {

  const errors = {};

  const email = req.body.email;
  const password = req.body.password;
  const verifyEmailToken = uuid4();

  try {
    const user = new User({
      email,
      displayName: req.body.displayName,
      verifyEmailToken: verifyEmailToken,
      verifiedEmail: false,
    });

    await user.setPassword(password);

    await user.save();
  } catch (e) {
    if (e.name === 'ValidationError') {
      let errorMessages = '';
      for (let key in e.errors) {
        errorMessages += `${key}: ${e.errors[key].message}<br>`;
      }
      return res.send(errorMessages);
    } else {
      throw e;
    }
  }

  try {
    const mailResponse = await sendMail({
      template: 'verify-registration-email',
      to: email,
      subject: 'Подтверждение email',
      link: `${config.get('server.host')}:${config.get('server.port')}/confirm/${verifyEmailToken}`
    });

    res.send(mailResponse);
  } catch (e) {
    res.send(`error ${e + ' ' + e.message}`);
  }
});

module.exports = router;
