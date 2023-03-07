const elements = ["Fire", "Air", "Water"];

// 'custom' join() method
let rtaFinal = '';
const separator = '--';
for (let index = 0; index < elements.length-1; index++) {
    const element = elements[index];
    rtaFinal = rtaFinal + element + separator;
} rtaFinal = rtaFinal + 'Water'; 
console.log('for', rtaFinal);

// built-in join() method
const rta = elements.join('--')
console.log('join', rta);

// built-in split() method
const title = 'Manipulacion De Arrays';

const urlFinal = title.split(' ').join('-').toLowerCase();
console.log(urlFinal);

/*
In JavaScript, join() and split() are two methods that can be used to manipulate strings and arrays.

join() method is used to convert an array into a string by concatenating all the elements of the array with a specified separator.
The syntax for join() method is as follows:
    array.join(separator)

split() method, on the other hand, is used to convert a string into an array by splitting the string into substrings based on a specified separator.
The syntax for split() method is as follows:
    string.split(separator, limit)
*/