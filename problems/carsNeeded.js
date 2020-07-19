// A typical car can hold 4 passengers and 1 driver, overall allowing 5 people to travel around. Given n number of people, return how many cars are needed to seat everyone comfortably.

// Ex: carsNeeded(5) ➞ 1; carsNeeded(11) ➞ 3

function carsNeeded(numberOfPassenger) {
  return Math.ceil(numberOfPassenger / 5);
}

console.log(carsNeeded(5));
