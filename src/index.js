var uniqueRandomArray = require('unique-random-array');
var starWarsNames = require('./starwars-names.json');

// Test 5
module.exports = {
  all: starWarsNames,
  random: uniqueRandomArray(starWarsNames),
};
