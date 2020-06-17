// Take an array of arrays and flatten to a single array.
// Ex: [[1,2], [3,4]] = [1,2,3,4];

function flattenArray(arr) {
  return arr.reduce(function (a, b) {
    return a.concat(b);
  });
}

console.log(
  flattenArray([
    [1, 2],
    [3, 4],
  ])
);
