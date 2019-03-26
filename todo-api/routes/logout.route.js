const express = require('express');
const jwt = require('jsonwebtoken');
const config = require('config');
const cash = require('../libs/redis');

const router = express.Router();

router.get('/', (req, res) => {

  const errors = {};
  // depart Barier from token
  const token = req.headers.authorization.substr(7);

  const decodedToken = jwt.decode(token);
  const timeNow = Math.round((new Date).getTime() / 1000) ;
  const tokenExpiresAt = decodedToken.exp;
  const expiresInTime =  tokenExpiresAt - timeNow;
  cash.set(`${config.get('jwt.blacklistName')}:${decodedToken.id}`, new Date(), 'EX', expiresInTime);
  console.log({header: req.headers.authorization, token, decodedToken, expiresInTime, timeNow, tokenExpiresAt });

  res.end();

});


module.exports = router;
