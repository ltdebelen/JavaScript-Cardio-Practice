// Write a function that returns true if the given string is a palindrome. A palindrome is a word or sentence that's spelled the sameway both forward and backward.

// Ex: racecar returns true

function isPalindrome(word) {
  const reversed = word.split("").reverse().join("");
  if (reversed == word) {
    console.log(true);
  } else {
    console.log(false);
  }
}

isPalindrome("zxc");
