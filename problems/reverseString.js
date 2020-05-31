// Create a function that will accept a word as an argument and returns the reversed version of the string

// reverseString("hello") returns olleh

function reverseString(word) {
  return word.split("").reverse().join("");
}

console.log(reverseString("hello"));
