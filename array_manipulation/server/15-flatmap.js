const users = [
  { userId: 1, username: "Tom", attributes: ["Nice", "Cute"] },
  { userId: 2, username: "Mike", attributes: ["Lovely"] },
  { userId: 3, username: "Tony", attributes: ["Nice", "Cool"] },
];

// using map() and flat() methods
// first get 'attributes' from every user, this will give us a nested array
// [ [ 'Nice', 'Cute' ], [ 'Lovely' ], [ 'Nice', 'Cool' ] ]
// then using flat we return a simple array with all 'attributes'
// [ 'Nice', 'Cute', 'Lovely', 'Nice', 'Cool' ]
const rta = users.map((user) => user.attributes).flat();
console.log("map-flat:", rta);
// using flatMap() method to get the same result from above
const rta2 = users.flatMap((user) => user.attributes);
console.log("flatMap:", rta2);

const calendars = {
  primaryCalendar: [
    {
      startDate: new Date(2021, 1, 1, 15),
      endDate: new Date(2021, 1, 1, 15, 30),
      title: "Cita 1",
    },
    {
      startDate: new Date(2021, 1, 1, 17),
      endDate: new Date(2021, 1, 1, 18),
      title: "Cita 2",
    },
  ],
  secondaryCalendar: [
    {
      startDate: new Date(2021, 1, 1, 12),
      endDate: new Date(2021, 1, 1, 12, 30),
      title: "Cita 2",
    },
    {
      startDate: new Date(2021, 1, 1, 9),
      endDate: new Date(2021, 1, 1, 10),
      title: "Cita 4",
    },
  ],
};

// using: Object.keys(calendars), we get: [ 'primaryCalendar', 'secondaryCalendar' ]
// so instead we use Object.values, to get the values of the object calendar
const rta3 = Object.values(calendars).flatMap(item => {
  // console.log('item', item); we get an array so we could use map()
  return item.map(date => date.startDate); // we use map() since flapMap() is returning 'undefined'
});
console.log(rta3);

/*
The flatMap() method in JavaScript is used to both map and flatten an array.
It takes a callback function as an argument, which is applied to each element of the array.
The result of the callback function is then flattened into a new array.

The difference between flatMap() and map() is that
flatMap() allows you to return an array that is automatically flattened into the new array,
while map() returns an array of the same length as the original array.

flat() and flatMap() methods themselves do not modify the original array,
but the elements in the new array that is returned may be mutable or immutable,
depending on their type and the actions that are performed on them.
*/