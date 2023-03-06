const numbers = [1,30,49,29,10,13];

// 'custom' find() method
let rta = undefined;
for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  if (element === 302323) {
    rta = element;
    break;
  }
}
console.log('for', rta);

// built.in find()method
const rta2 = numbers.find(item => item === 302323)
console.log('find', rta2);


const products = [
  {
    name: "Pizza",
    price: 12,
    id: '🍕'
  },
  {
    name: "Burger",
    price: 23,
    id: '🍔'
  },
  {
    name: "Hot dog",
    price: 34,
    id: '🌭'
  },
  {
    name: "Hot cakes",
    price: 355,
    id: '🥞'
  },
];

const rta3 = products.find(item => item.id === '🍔')
console.log('find', rta3);
const rta4 = products.findIndex(item => item.id === '🍔')
console.log('findIndex', rta4);

/*
The find() method is a built-in array method in JavaScript
that is used to search for the first element in an array that satisfies a given condition.
It returns the value of the first element in the array that meets the condition specified in a callback function,
or undefined if no such element is found.

    const numbers = [1, 3, 5, 7, 8, 9, 11, 12];
    const firstEven = numbers.find((element) => element % 2 === 0);
    console.log(firstEven); // Output: 8
*/