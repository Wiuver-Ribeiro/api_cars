const express = require('express');
const router = express.Router();

const carController = require('../controllers/carController');

router.get('/list', carController.getAllCars);
router.post('/register', carController.addCar);
router.get('/:carId', carController.getCarById);
router.put('/:carId', carController.editCarById);
router.delete('/:carId', carController.deleteCarById);

module.exports = router;