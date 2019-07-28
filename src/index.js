var uniqueRandomArray = require('unique-random-array');
var starWarsNames = require('./starwars-names.json');

// Test 2
module.exports = {
  all: starWarsNames,
  random: uniqueRandomArray(starWarsNames),
};
