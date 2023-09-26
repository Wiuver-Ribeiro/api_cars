const express = require("express");

const Car = require("../models/cars");

module.exports = {
  addCar: async (req, res, next) => {
    try {
      const car = await Car.create(req.body);
      return res.send({ car });
    } catch (error) {
      return res.status(400).send({ error: "Erro ao cadastrar um novo carro!" });
    }
  },

  getAllCars: async (req, res, next) => {
    try {
      res.setHeader('Content-type', 'application/json');
      res.status(200).send(cars);
    } catch (error) {
      return res.stats(400).send({ error: "Erro ao buscar  todos os carros!" });
    }
  },
};
