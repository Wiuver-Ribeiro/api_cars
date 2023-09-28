const express = require("express");
const mongoose = require("mongoose");
require('../database/database');

const Car = require("../models/cars");

module.exports = {
  addCar: async (req, res, next) => {
    try {
      const { brand, model, description, year } = req.body;
      const car = new Car({
        brand,
        model,
        description,
        year,
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
      return res
        .status(400)
        .send({ error: "Erro ao buscar  todos os carros!" });
    }
  },

  getCarById: async (req, res, next) => {
    try {
      const carId = req.params.carId;
      const car = await Car.findOne({ _id: carId });
      if (!car) {
        return res.status(404).json({ error: "Carro não encontrado" });
      }

      return res.status(200).json({ car });
    } catch (error) {
      return res.status(500).json({ error: "Erro ao buscar o carro" });
    }
  },

  editCarById: async (req, res, next) => {
    try {
      const carId = req.params.carId;
      const car = await Car.findById(carId);

      if (!car) {
        return res.status(404).json({ error: 'Carro não encontrado' });
      }

      car.brand = req.body.brand || car.brand;
      car.model = req.body.model || car.model;
      car.description = req.body.description || car.description;
      car.year = req.body.year || car.year;

      await car.save();

      return res.status(200).json({ car });
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao editar o carro' });
    }
  },

  deleteCarById: async (req, res, next) => {
    try {
      const carId = req.params.carId;

      const car = await Car.findByIdAndDelete(carId);

      return res.status(200).json({ message: 'Carro apagado com sucesso!',car });
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao apagar o carro!' });
    }
  }

};