// Create a function that finds the maximum range of a triangle's third edge, where the side lengths are all integers. (side1 + side2) - 1 = maximum range of third edge.

// Ex: nextEdge(8, 10) ➞ 17

function nextEdge(s1, s2) {
  return s1 + s2 - 1;
}

console.log(nextEdge(8, 10));
