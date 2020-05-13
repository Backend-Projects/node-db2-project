const express = require('express');
const db = require('../dbconfig.js');

const router = express.Router();

router.get('/', (req, res) => {
  db('cars')
    .then((cars) => {
      res.status(200).json(cars);
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .json({ message: 'server was unable to retirve car data' });
    });
});

module.exports = router;
