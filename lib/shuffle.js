'use strict';

var crazyMixUp = module.exports = {};

crazyMixUp.transformArray = function(array) {
  var x = array.length, y, z;

  while (x) {
    z = Math.floor(Math.random() * x--);
    y = array[x];
    array[x] = array[z];
    array[z] = y;
  }
  return array;
};
