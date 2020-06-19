// Return a sum of all parameters entered regardless the amount of numbers.

// Ex: addAll(2,5,6,7) returns 20

function addAll() {
  // convert the arguments object into an array
  // loop through the array and add the argument values
  const args = Array.prototype.slice.call(arguments);
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
}

console.log(addAll(2, 5, 6, 7));
