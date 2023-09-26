const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/cars', { useMongoClient: true });

mongoose.Promise = global.Promise;

module.exports = mongoose