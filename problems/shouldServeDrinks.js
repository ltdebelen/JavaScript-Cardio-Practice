// A bartender is writing a simple program to determine whether he should serve drinks to someone. He only serves drinks to people 18 and older and when he's not on break.

// Ex: shouldServeDrinks(17, true) ➞ false; shouldServeDrinks(19, false) ➞ true

function shouldServeDrinks(age, onBreak) {
  if (age > 18 && onBreak === false) {
    return true;
  }

  return false;
}

console.log(shouldServeDrinks(19, false));
