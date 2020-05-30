// Exercise 2
// -------------------
const lateComers = ['Felicia', 'Charles', 'Terry'];
const earlyBirds = ['Ellen', 'Jerry', 'Jasmine'];

// You have two arrays above of people who arrived late to your party and
// people who arrived early.
// Create a new array that holds all of the party attendees and

// Write a program that will do the following:
// Output them in a tidy list from first to last arrival the console.

// NO for loops!


console.log(lateComers);
console.log(earlyBirds);


// Create a new array that holds all of the party attendees
const partyAttendees = [...lateComers, ...earlyBirds];
console.log(partyAttendees);

// Output attendees from first to last arrival to the console
partyAttendees.forEach((item, id) => {
  console.log(`Attendee no ${id + 1}: ${item}`);
})
