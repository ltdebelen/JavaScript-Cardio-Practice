// Write a function kebab to snake which takes a single kebab-cased string argument and returns the snake_cased version.

// Ex: hello-world should be hello_world

function kebabToSnake(word) {
  // Create an array that will store the values of characters bein looped on.
  let result = [];
  // Loop through each letter of the word
  for (let i = 0; i < word.length; i++) {
    // This will handle the changing of dash to underscore.
    if (word.charAt(i) === "-") {
      result.push("_");
    } else {
      result.push(word.charAt(i));
    }
  }

  return result.join("");
}

console.log(kebabToSnake("hello-world"));
