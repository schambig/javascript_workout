const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort(); // sort() modify the original array
console.log(months); // Output: [ 'Dec', 'Feb', 'Jan', 'March' ] (ASCII order)

const numbers = [1, 30, 4, 21, 100000];
// numbers.sort(); Output: [ 1, 100000, 21, 30, 4 ] (ASCII order)
numbers.sort((a,b) => b - a); // (b-a): descendent order, (a-b): ascendent order
console.log(numbers);

// what happens with special characters?
const words = ['réservé', 'premier', 'communiqué', 'café', 'adieu', 'éclair', 'banana'];
/*
words.sort();
Output: (ASCII order)
[
  'adieu',
  'banana',
  'café',
  'communiqué',
  'premier',
  'réservé',
  'éclair'
]
*/
// apply this when working with not moders browsers to get the same result from above
words.sort((a,b) => a.localeCompare(b)); 
console.log(words);

// now let's work with sort() and objects
const orders = [
    {
      customerName: "Nicolas",
      total: 600,
      delivered: true,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
    {
      customerName: "Santiago",
      total: 1840,
      delivered: true,
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
    },
  ];
  // the same as ordering an array but considering the properties '.total' in this case
  orders.sort((a,b) => b.total - a.total); 
  console.log(orders);

/*
The sort() method in JavaScript is used to sort the elements of an array in place.
It takes an optional comparison function as an argument, which determines how the elements are sorted.

  const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
  numbers.sort((a, b) => a - b);
  console.log(numbers); // Output: [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]

  const fruits = ['banana', 'apple', 'pear', 'orange'];
  fruits.sort();
  console.log(fruits); // Output: ['apple', 'banana', 'orange', 'pear']

Note that the sort() method sorts the elements of the array in place,which means that it modifies the original array.
If you want to create a sorted copy of an array without modifying the original array,
you can make a copy of the array first using the slice() method:

  const unsorted = [3, 1, 4, 1, 5];
  const sorted = unsorted.slice().sort();
  
  console.log(sorted); // Output: [1, 1, 3, 4, 5]
  console.log(unsorted); // Output: [3, 1, 4, 1, 5]

  In this example, we create a copy of the unsorted array using the slice() method,
  and then sort the copy using the sort() method. The unsorted array is not modified by the sort() method.
*/