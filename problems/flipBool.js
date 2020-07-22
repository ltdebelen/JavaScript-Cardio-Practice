// Booleans can also be written as integers, where 1 = True and 0 = False. Make a function that returns the opposite of the boolean given.

// flipBool(true) ➞ 0; flipBool(false) ➞ 1;

function flipBool(isTrue) {
  switch (isTrue) {
    case true:
      return false;
    case false:
      return true;
    case 1:
      return 0;
    case 0:
      return 1;
  }
}

console.log(flipBool(0));
