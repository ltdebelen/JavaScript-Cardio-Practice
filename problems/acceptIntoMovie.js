// Write a function that checks whether a person can watch an MA15+ rated movie. One of the following two conditions is required for admittance:

// The person is at least 15 years old.
// They have parental supervision.

// Ex: acceptIntoMovie(14, true) ➞ true; acceptIntoMovie(16, false) ➞ true; acceptIntoMovie(14, false) ➞ false

function acceptIntoMovie(age, isSupervised) {
  if (age >= 15 || isSupervised === true) {
    return true;
  }

  return false;
}

console.log(acceptIntoMovie(16, false));
