// Create a function that takes a string and returns a string in which each character is repeated once.

// Ex: doubleChar("String") returns "SSttrriinngg"

function doubleChar(str) {
  let result = "";
  // Loop through the str
  for (let i = 0; i < str.length; i++) {
    result = result + str[i] + str[i];
  }

  return result;
}

console.log(doubleChar("String"));
