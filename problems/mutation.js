// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

// Ex: ["hello", "Hello"] returns true ["hello", "hey"] returns false ["alien", "line"] returns true;

function mutation(arr) {
  let firstWord = arr[0].toLowerCase();
  let secWord = arr[1].toLowerCase();

  for (let i = 0; i < secWord.length; i++) {
    if (firstWord.indexOf(secWord[i]) === -1) return false;
  }

  return true;
}

console.log(mutation(["alien", "line"]));
