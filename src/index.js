var uniqueRandomArray = require('unique-random-array');
var starWarsNames = require('./starwars-names.json');

// Test
module.exports = {
  all: starWarsNames,
  random: uniqueRandomArray(starWarsNames),
};
