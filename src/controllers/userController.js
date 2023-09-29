const express = require("express");
const mongoose = require("mongoose");
const { find, findById } = require("../models/users");

require("../databse/database");

const User = require("../models/users");

module.exports = {
  addUser: async (req, res, next) => {
    try {
      const { token, username, password, avatar } = req.body;
      const user = new User({
        token,
        username,
        password,
        avatar,
      });
      await user.save();
    } catch (error) {
      return res
        .status(400)
        .send({ error: "Erro ao cadastrar um Novo Usuário!" });
    }
  },
  getAllUsers: async (req, res, next) => {
    try {
      const users = await User.findOne();
      res.setHeader("Content-Type", "application/json");
      res.status(200).send(users);
    } catch (error) {
      return res
        .status(400)
        .send({ error: "Erro ao Listar todos os Usuários!" });
    }
  },
  getUserById: async (req, res, next) => {
    try {
      const userId = req.params.userId;
      const user = await User.findOne({ _id: userId });

      if (!user) {
        return res.status(404).json({ error: "Usuário não Encontrado!" });
      }
      return res.status(200).json({ user });
    } catch (error) {
      return res.status(400).send({ error: "Erro ao Encontrar o Usuário!" });
    }
  },
  editCarById: async () => {
    try {
      const userId = req.params.userId;
      const user = await findById(userId);

      if (!user) {
        return res.status(404).send({ error: "Usuário não encontrado!" });
      }
      user.username = req.body.username || user.username;
      user.password = req.body.password || user.password;
      user.avatar = req.body.avatar || user.avatar;
      await user.save();

      return res.status(200).json({ user });
    } catch (error) {
      return res.status(500).json({ error: "Erro ao tentar editar o Carro!" });
    }
  },
  deleteUserById: async (req, res, next) => {
    try {
      const userId = req.params.userId;
      const user = await findById(userId);
      if (!user) {
        return res.status(200).json({ error: "Erro, Usuário não existe!" });
      }
      await User.deleteOne(userId);
      return res
        .status(200)
        .json({ message: "Sucesso!, Usuário apagado com sucesso!" });
    } catch (error) {
      return res.status(500).json({ error: "Erro ao tentar apagar o Usuário" });
    }
  },
};
