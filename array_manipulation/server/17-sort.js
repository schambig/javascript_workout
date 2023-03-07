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