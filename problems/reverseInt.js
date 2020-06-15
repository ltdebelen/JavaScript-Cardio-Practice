// Return an integer in reverse
// Ex: reverseInt(321) returns 123

function reverseInt(num) {
  const reversed = num.toString().split("").reverse().join("");

  return parseInt(reversed);
}

console.log(reverseInt(321));
