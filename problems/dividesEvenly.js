// Given two integers, a and b, return true if a can be divided evenly by b. Return false otherwise.

// dividesEvenly(98, 7) ➞ true # 98/7 = 14; dividesEvenly(85, 4) ➞ false # 85/4 = 21.25

function dividesEvenly(first, sec) {
  let result = first / sec;
  return result % 2 === 0;
}

console.log(dividesEvenly(98, 7));
