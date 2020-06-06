// Repeat a given string(first argument) num times(second argument). Return an empty string of num is not a positive number

// Ex: repeatString("e", 3) returns "eee" repeatString("a", -3) returns "".

function repeatString(str, num) {
  let result = "";

  if (num < 0) {
    result = "";
  } else {
    for (let i = 0; i < num; i++) {
      result += str;
    }
  }

  return result;
}

console.log(repeatString("e", 2));
