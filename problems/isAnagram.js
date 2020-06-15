// Return true if anagram, false otherwise
// Ex: isAnagram("elbow", "below") returns true;

function isAnagram(str1, str2) {
  // loop through str 1 with each letter
  for (let i = 0; i < str1.length; i++) {
    // check if the letters from str1 is an index of str2
    if (str2.indexOf(str1[i]) === -1) {
      return false;
    }
  }

  return true;
}

console.log(isAnagram("dormitory", "dirtyroom"));
