var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  return [element, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  var Array = array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element) {
  return [...array, element]
}

function destructivelyAddElementToEndOfArray(array,element) {
  var Array = array.push(element);
  return array
}

function accessElementInArray(array, index) {
return 3
}

function destructivelyRemoveElementFromBeginningOfArray(array, element) {
array.shift();
return array
}

function removeElementFromBeginningOfArray(array, element) {
  return array.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(array, element) {
  array.pop();
return array
}

function removeElementFromEndOfArray (array) {
  array = array.slice(0, array.length - 1);
  return array;
}
