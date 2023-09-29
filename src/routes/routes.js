const express = require('express');
const router = express.Router();

const carController = require('../controllers/carController');
// const carValidator = require('../validators/carValidator');

//Routes Cars
router.post('/cars/register', carController.addCar);
router.get('/cars', carController.getAllCars);
router.get('/cars/:carId', carController.getCarById);
router.put('/cars/:carId', carController.editCarById);
router.delete('/cars/:carId', carController.deleteCarById);

//Routes Users
router.post('/users')
module.exports = router;