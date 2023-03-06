const numbers = [1,30,39,29,10,13];

// "custom" every() method
let rta = true;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element >= 40) {
        rta = false
    }
}
console.log('custom method:', rta);

// built.in every() method
const rta2 = numbers.every(item => item <= 40)
console.log('built-in method:', rta2);


const team = [
  {
    name: "Colitas",
    age: 3,
  },
  {
    name: "Andrea",
    age: 8,
  },
  {
    name: "Zulema",
    age: 2,
  },
  {
    name: "Santiago",
    age: 18,
  },
];

const rta3 = team.every(item => item.age < 15);
console.log('todos menores de 15?:', rta3)

/*
The every() method in JavaScript is a higher-order array method
that checks whether all elements in an array pass a certain test implemented by a callback function.

The every() method executes the callback function for each element in the array until the callback returns false for any element.
If the callback returns true for all elements, the every() method returns true. Otherwise, it returns false.
*/