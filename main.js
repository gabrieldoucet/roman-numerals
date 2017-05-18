/**
 * Created by Gabriel on 17/05/2017.
 */
'use strict';

/* The basic roman numerals alphabet, represented as a dictionary
 */
const romanNumeralsDict = {
  1: 'I',
  5: 'V',
  10: 'X',
  50: 'L',
  100: 'C',
  500: 'D',
  1000: 'M',
};

/**
 * Decomposes a number in base 10 representation
 * @param num - The number to decompose
 * @returns {Array.<*>} The decomposition in base 10 ordered by increasing number of powers of ten
 */
const getBase10Factors = function (num) {
  let base10Factors = [];
  for (let i = 3; i >= 0; i--) {
    let power = Math.pow(10, i);
    let coeff = Math.floor(num / power);
    base10Factors.push(coeff * power);
    num = num - coeff * power;
  }
  return base10Factors.reverse();
};

/**
 * Mapping function used to convert a number in roman numeral.
 * @param num - The number being mapped
 * @param index - The index of the element being mapped
 * @returns {string} The corresponding roman numeral
 */
const mapping = function (num, index) {
  let ten         = Math.pow(10, index);
  let lowerBound  = ten;
  let middleBound = 5 * ten;
  let upperBound  = 10 * ten;
  let str         = '';

  let tenCount = Math.floor(num / ten);
  // Test if the input number is 1, 5, 10, 50, 100, 500 or 1000, if so, retrieves the value directly from
  // the dictionnary
  if (num === ten || num === 5 * ten || num === 10 * ten) {
    str = romanNumeralsDict[num];
  } else if (num > ten && num < 4 * ten) {
    for (let i = 0; i < tenCount; i++) {
      str += romanNumeralsDict[lowerBound];
    }
  } else if (num >= 4 * ten && num < 5 * ten) {
    str = romanNumeralsDict[lowerBound] + romanNumeralsDict[middleBound];
  } else if (num > 5 * ten && num < 9 * ten) {
    str             = romanNumeralsDict[middleBound];
    let middleCount = Math.floor((num - middleBound) / ten);
    for (let i = 0; i < middleCount; i++) {
      str += romanNumeralsDict[lowerBound];
    }
  } else if (num >= 9 * ten) {
    str = romanNumeralsDict[lowerBound] + romanNumeralsDict[upperBound];
  }
  return str;
};

/**
 * Converts a number in roman numeral.
 * @param num - The number to convert
 * @returns {string} The roman numeral
 */
const intToRoman = function (num) {
  let base10Factors = getBase10Factors(num);
  return base10Factors.map(mapping).reverse().join('');
};

console.log(intToRoman(process.argv[2]));

/*
// Testing part with Node and an input csv file
const fs       = require('fs');
const readline = require('readline');
const fstream  = fs.createReadStream('roman-numerals__test.csv');
const rl       = readline.createInterface({
  input: fstream,
});

let testCounter     = 0;
let successfulTests = 0;

rl.on('line', function (line) {
  let tokens        = line.split(',');
  let int           = parseInt(tokens[0]);
  let romanFromFile = tokens[1];
  let roman         = intToRoman(int);
  if (romanFromFile === roman) {
    console.log(`Testing ${int}. Expected ${romanFromFile}. Result ${roman}. \u2713`);
    successfulTests++;
  }
  testCounter++;
});

rl.on('close', function () {
  console.log('Nothing more to read');
  console.log(`Tests passed: ${successfulTests}/${testCounter}`);
}); */