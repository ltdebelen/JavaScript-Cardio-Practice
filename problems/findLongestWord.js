// Create a function that returns the length of the longest word in the provided sentence. The return should be a number

// Ex: findLongestWord("The Quick") returns 5;

function findLongestWord(str) {
  // Get each word from the given string.
  let words = str.split(" ");
  // Create a variable that will hold the value of the longest string.
  let longest = 0;

  // Loop through each words from the given string.
  for (let i = 0; i < words.length; i++) {
    // Compare the length of the current word to the longest word value
    if (words[i].length > longest) {
      // If it's longer, set the value of the longest to the current iteration.
      longest = words[i].length;
    }
  }

  return longest;
}

console.log(findLongestWord("The Quick"));
