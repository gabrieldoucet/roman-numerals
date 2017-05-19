/**
 * Created by Gabriel on 17/05/2017.
 */
'use strict';

/* The basic Roman numerals alphabet, represented as a dictionary
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
const getExpandedNotationArray = function (num) {
  let expandedNotationArray = [];
  for (let i = 3; i >= 0; i--) {
    let power = Math.pow(10, i);
    let coeff = Math.floor(num / power);
    expandedNotationArray.push(coeff * power);
    num = num - coeff * power;
  }
  return expandedNotationArray.reverse();
};

/**
 * Mapping function used to convert a number in Roman numeral.
 * @param num - The number being mapped
 * @param index - The index of the element being mapped
 * @returns {string} The corresponding Roman numeral
 */
const mapping = function (num, index) {
  let placeValue  = Math.pow(10, index);
  let lowerBound  = placeValue;
  let middleBound = 5 * placeValue;
  let upperBound  = 10 * placeValue;
  let str         = '';

  let placeValueCount = Math.floor(num / placeValue);
  // Test if the input number is 1, 5, 10, 50, 100, 500 or 1000, if so, retrieves the value directly from
  // the dictionary
  if (num === placeValue || num === 5 * placeValue || num === 10 * placeValue) {
    str = romanNumeralsDict[num];
  } else if (num > placeValue && num < 4 * placeValue) { //  Handles cases like III, XXX or CCC
    for (let i = 0; i < placeValueCount; i++) {
      str += romanNumeralsDict[lowerBound];
    }
  } else if (num >= 4 * placeValue && num < 5 * placeValue) { // Handles cases like IV, XL or CD
    str = romanNumeralsDict[lowerBound] + romanNumeralsDict[middleBound];
  } else if (num > 5 * placeValue && num < 9 * placeValue) { // Handles cases like VIII, LXXX or DCCC
    str             = romanNumeralsDict[middleBound];
    let middleCount = Math.floor((num - middleBound) / placeValue);
    for (let i = 0; i < middleCount; i++) {
      str += romanNumeralsDict[lowerBound];
    }
  } else if (num >= 9 * placeValue) { // Handles cases like IX, XC, CM
    str = romanNumeralsDict[lowerBound] + romanNumeralsDict[upperBound];
  }
  return str;
};

/**
 * Converts a number in Roman numeral.
 * @param num - The number to convert
 * @returns {string} The Roman numeral
 */
const intToRoman = function (num) {
  let expandedNotationArray = getExpandedNotationArray(num);
  return expandedNotationArray.map(mapping).reverse().join('');
};