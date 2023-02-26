const words = ['holholahola', 'spray', 'limit', 'elite', 'exuberant'];

// this is a "custom filter"
const newArray = [];
for (let index = 0; index < words.length; index++) {
    const item = words[index];
    if (item.length >= 6) {
        newArray.push(item);
    }
}
console.log('newArray', newArray);
console.log('original', words );

// built-in filter
const rta = words.filter(item => item.length >= 6)
console.log('rta', rta);
console.log('original', words );


const orders = [
    {
      customerName: "Salomon",
      total: 60,
      delivered: true,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
    {
      customerName: "Santiago",
      total: 180,
      delivered: true,
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
    },
    {   
        customerName: "Salomon",
        total: 2322,
        delivered: false,
      },
  ];

// filter method with more than one condition
const rta3 = orders.filter(item => item.delivered && item.total >= 100)
console.log('rta3', rta3);

// simple searcher with filter method
const search = (query) => {
    return orders.filter(item => {
        return item.customerName.includes(query);
    })
}

// we can search for any pattern
console.log(search('Salo'));
console.log(search('hsdjkfhdsj'));