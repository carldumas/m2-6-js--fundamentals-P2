// Exercise 1.0
// ------------
// Create an object that represents *you*.
// It should contain your first name, last name, age and hometown.

// It should look something like this
// let myObject = {
//     name: {
//         first: 'Scott',
//         last: 'Morin',
//     },
//     age: '49',
//     city: 'Montreal',
//     siblings: 1,
//     petName: 'Mia',
//     monthOfBirth: 'July'
// }

let myOject = {
  name: {
    first: 'Carl',
    last: 'Dumas',
  },
  age: '39',
  hometown: 'Saint-Jean-sur-Richelieu',
  occupation: 'QA',
  monthOfBirth: 'August',
  favorite: {
    sport: 'Olympic Weightlifting',
    meal: 'Spaguetti',
  },
  pets: {
    name: 'Kelly',
    race: 'Dog',
    breed: 'Doberman',
    number: '1',
    age: '4',
  }
}
// A) console.log() your object.
console.log(myOject);

// B) console.log() a few of the values in the object.
console.log(myOject.age);
console.log(myOject.name.first);

//-------------------------------------------------

// Exercise A
// ------------
// Add three more key/value pairs to your object that represent other attributes
// of yourself. Ideas include (but are not limited to):
//     - Favorite TV Shows/Movies/Sports/Activities etc.
//     - Occupation
//     - Date of Birth
//     - Pets (number of pets, names of pets, etc.)

// HINT: You can just modify the object that you created before.

//-------------------------------------------------

// Exercise B
// ------------
// Look up your favorite movie on IMDB, and make an object that represents some
// aspects of that movie, *e.g.*:
//     - Title
//     - Director
//     - Year released
//     - Rating
//     - Actors

// HINT: Most movies have multiple actors. What data-structure do we use to
// represent a collection of similar things?

let favoriteMovie = {
  title: 'The Matrix',
  director: 'Lana Wachowski',
  yearReleased: 1999,
  ratings: '8.7/10',
  actors: ['Keanu Reeves', 'Laurence Fishburne', 'Carrie-Anne Moss'],
};

console.log(favoriteMovie)
//-------------------------------------------------

// Exercise C
// ------------
// Fix the attempts to access values in the `person` object:

const key = 'name';
const person = {
  name: 'Alyssa P. Hacker',
  age: 26,
  hometown: 'somewhere',
};

person.age; // => 26
console.log(person.age);
person.key; // => "Alyssa P. Hacker"
console.log(person['name']);

//-------------------------------------------------

// Exercise D
// ------------
// Write a function `fullName` that takes a person object as an argument, and
// returns that person's full name as a string. By *person object*, we mean an
// object that has the structure of the object you created to represent
// yourself above.

// Example
const alyssa = {
  name: {
    first: 'Alyssa',
    middle: 'P.',
    last: 'Hacker',
  },
  age: 26,
};

function fullName(person) {
  return `${person.name.first} ${person.name.middle} ${person.name.last}`;
}

console.log(fullName(alyssa)); // => "Alyssa P. Hacker"

// Exercise E
// ------------
// What happens if you pass a person object to `fullName` that doesn't have a
// middle name? It's likely that you'd get a double space: "Alyssa  Hacker"

// Your `fullName` function should work correctly regardless of whether or not
// the person has a middle name -- if it doesn't produce the output shown above
// when given the object `{name: {first: "John", last: "Doe"}}`, fix it so that
// it does.

const rick = {
  name: {
    first: 'Rick',
    last: 'Sanchez',
  },
  age: 66,
};

function betterFullName(person) {
  let nameArr = [person.name.first, person.name.middle, person.name.last];

  nameArr = nameArr.filter((name) => typeof name === 'string');

  return nameArr.join(' ');
}

console.log(betterFullName(rick)); // => "Rick Sanchez"
