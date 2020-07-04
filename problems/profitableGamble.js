// Create a function that takes in three arguments (prob, prize, pay) and returns true if prob * prize > pay; otherwise return false.

// To illustrate, profitableGamble(0.2, 50, 9) should yield true, since the net profit is 1 (0.2 * 50 - 9), and 1 > 0.

// Ex: profitableGamble(0.2, 50, 9) ➞ true; profitableGamble(0.9, 1, 2) ➞ false

function profitableGamble(prob, prize, pay) {
  if (prob * prize > pay) {
    return true;
  }
  return false;
}

console.log(profitableGamble(0.2, 50, 9));
