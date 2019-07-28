var uniqueRandomArray = require('unique-random-array');
var starWarsNames = require('./starwars-names.json');

// Test 3
module.exports = {
  all: starWarsNames,
  random: uniqueRandomArray(starWarsNames),
};
