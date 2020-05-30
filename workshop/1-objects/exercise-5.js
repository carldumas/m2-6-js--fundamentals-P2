// We often deal with "arrays of objects";
// below is an example of an array of objects, where each object represents a person:

const people = [
  { name: { first: 'Alyssa', middle: 'P.', last: 'Hacker' }, age: 26 },
  { name: { first: 'Ben', last: 'Bitdiddle' }, age: 34 },
  { name: { first: 'Eva', middle: 'Lu', last: 'Ator' }, age: 40 },
  { name: { first: 'Lem', middle: 'E.', last: 'Tweakit' }, age: 45 },
  { name: { first: 'Louis', last: 'Reasoner' }, age: 21 },
  { name: { first: 'Shahan', middle: 'Haig', last: 'Krakirian' }, age: 21 },
];

// Exercise 5.0
// ------------
// Add the object representing yourself to this array of people (if your
// `name` key does not have the same "shape" as the ones above, make sure you
// change it to look like these).

people.push({ name: { first: 'Carl', last: 'Dumas' }, age: 39 })
console.log(people);

//-------------------------------------------------

// Exercise 5.1
// ------------
// Write a function that returns the average age of the `people` array.

function avgAge(peopleArr) {
  let sumAge = 0;
  const peopleAgeLength = peopleArr.length;

  peopleArr.forEach((person) => {
    sumAge += person.age;
    // console.log(sumAge);
  });
  console.log(`The average age is equal to ${sumAge} divided by ${peopleAgeLength}.`);
  return sumAge / peopleAgeLength;
}

console.log(`The average age is ${avgAge(people)}.`);

//-------------------------------------------------

// Exercise 5.2
// ------------
// Write a function that, when passed an array of *people* (person objects) as
// an argument, returns an array of their full names (each full name is a string).
// Can you make use of your `fullName` function here?

function fullName(peopleArr) {
  const peopleName = [];

  peopleArr.forEach((person) => {
    const fullName = Object.values(person.name).join(' ');
    // console.log(fullName);

    peopleName.push(fullName);
    // console.log(peopleName);
  });
  return peopleName;
}

console.log(fullName(people));

//-------------------------------------------------

// Exercise 5.3
// ------------
// Write a function that, when given *people* and an *age* as arguments,
// returns an array of just the people that are older than the specified age..

function olderPeople(peopleArr, age) {
  return peopleArr.filter((person) => {
    return person.age > age;
  });
}

console.log(olderPeople(people, 26));
console.log(olderPeople(people, 38));
