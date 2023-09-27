const express = require('express');
const router = express.Router();

const carController = require('../controllers/carController');

router.get('/list', carController.getAllCars);
router.post('/register', carController.addCar);
router.get('/:cardId', carController.getCarById);
router.put('/:cardId', carController.editCarById);

module.exports = router;