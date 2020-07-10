// Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.

// Ex: frames(1, 1) ➞ 60; frames(10, 25) ➞ 15000

function fps(frames, minutes) {
  return frames * (minutes * 60);
}

console.log(fps(10, 25));
