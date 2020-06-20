// Write a function that converts hours into seconds.

// Ex: howManySeconds(2) returns 7200

function howManySeconds(hour) {
  // 60 seconds a minute, 60 minutes an hour
  return hour * 60 * 60;
}

console.log(howManySeconds(10));
