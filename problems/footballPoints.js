// Create a function that takes the number of wins, draws and losses and calculates the number of points a football team has obtained so far. A win receives 3 points, a draw 1 point and a loss 0 points.

// Ex: footballPoints(3, 4, 2) ➞ 13

function footballPoints(wins, draws, losses) {
  return wins * 3 + draws * 1 + losses * 0;
}

console.log(footballPoints(3, 4, 2));
