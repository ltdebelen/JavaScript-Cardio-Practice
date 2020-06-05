// Check if a string (first arg, str) ends with the given target string (second arg, target)

// Ex: confirmEnding("Vue", "e") returns true;

function confirmEnding(str, target) {
  const lastChar = str[str.length - 1];

  if (lastChar.toLowerCase() === target.toLowerCase()) {
    return true;
  }

  return false;
}

console.log(confirmEnding("Vue", "e"));
