// this file is linked to 5-index.html

/*
let greetingText = 'Hi, I\'m Salomón';
let age = 99;
alert(greetingText);
alert(greetingText);
greetingText = 'Hi I am really Salomón';
alert(greetingText);
alert(age);
*/

let userName = 'Naomi';
let age = 30;
// array in js, cero indexed, could hold multiple value types
let hobbies = ['Hacking', 'Fixing', 'Hunting'];
/*
object: in js are mutable values that store 'label:value' related data
'label:value' combination is also colled property in js
we could declare three individual variables and assign the values needed:
let jobTitle = 'Executive officer';
let jobPlace = 'Rocinante';
let jobSalary = 100000;
but a better aproach is to use objects
*/
let job = { title: 'Executive officer', place: 'Rocinante', salary: 100000};

// access the first element in hobbies array
alert(hobbies[0]);