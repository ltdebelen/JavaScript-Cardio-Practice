// Return the provided string with the first letter of each word capitalized.

// Ex titleCase("what's poppin") returns "What's Poppin"

function titleCase(str) {
  let words = str.split(" ");

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }

  return words.join(" ");
}

console.log(titleCase("what's poppin"));
