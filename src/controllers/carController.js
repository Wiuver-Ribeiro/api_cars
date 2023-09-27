const express = require("express");
const mongoose = require("mongoose");

const Car = require("../models/cars");

module.exports = {
  addCar: async (req, res, next) => {
    try {
      const { brand, model, description, year } = req.body;
      const car =  new Car({
        brand,
        model,
        description,
        year
      });
      await car.save();
      return res.send({ car });
    } catch (error) {
      return res
        .status(400)
        .send({ error: "Erro ao cadastrar um novo carro!" });
    }
  },

  getAllCars: async (req, res, next) => {
    try {
      const cars = await Car.find();
      res.setHeader("Content-type", "application/json");
      res.status(200).send(cars);
    } catch (error) {
      return res.status(400).send({ error: "Erro ao buscar  todos os carros!" });
    }
  },

getCarById: async (req, res) => {
  try {
    const carId = req.params.carId; // Obtém o ID do parâmetro da rota
    const car = await Car.findOne({ _id: carId }); // Busca o carro pelo ID

    if (!car) {
      return res.status(404).json({ error: 'Carro não encontrado' });
    }

    return res.status(200).json({ car });
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao buscar o carro' });
  }
 }
}
