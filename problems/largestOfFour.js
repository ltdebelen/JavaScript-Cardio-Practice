// Return an array consisting of the largest number from each provided sub-array.

// Ex: largestofFour([4,3,2,1], [8,7,6,5], [12, 11, 10 ,9]) should return [4,8,12]

function largestofFour(arr) {
  let largestArr = [];

  for (let i = 0; i < arr.length; i++) {
    let largestEl = 0;
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > largestEl) {
        largestEl = arr[i][j];
      }
    }
    largestArr.push(largestEl);
  }
  return largestArr;
}

console.log(
  largestofFour([
    [4, 3, 2, 1],
    [8, 7, 6, 5],
    [12, 11, 10, 9],
  ])
);
