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
// access the first element in hobbies array
alert(hobbies[0]);

/*
object: in js are mutable values that store 'label:value' related data
'label:value' combination is also called property in js
we could declare three individual variables and assign the values needed:
let jobTitle = 'Executive officer';
let jobPlace = 'Rocinante';
let jobSalary = 100000;
but a better aproach is to use objects
*/
// use backticks to split string value in multiple lines
let userLastname = `Nag
ata`;
// split object value type in  multiple lines
let job = {
    title: 'Executive officer',
    place: 'Rocinante',
    salary: 100000
};
// access the first property in object value, use the 'dot syntax'
alert(job.title);