// Truncate a string (first arg) based from the length of the (second arg). Return the truncated string with a ... ending.

// Ex: truncateString("Hello World", 3) returns Hel...

function truncateString(str, num) {
  return str.slice(0, num) + "...";
}

console.log(truncateString("Hello World", 3));
