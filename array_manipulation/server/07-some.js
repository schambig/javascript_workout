const numbers = [1, 2, 3, 4];

// this is a "custom some method"
let rta = false;
for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  if (element % 2 === 0) {
    rta = true;
    break; // break when at least one value meets the condition
  }
}
console.log(rta);


// built-in some method
const rta2 = numbers.some((item) => item % 2 === 0);
console.log("rta2", rta2);

// using some method with objects
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

// if at least one was delivered
const rta3 = orders.some((item) => item.delivered);
console.log("rta3", rta3);

// using some method with a library 
const dates = [
  {
    startDate: new Date(2021, 1, 1, 10),
    endDate: new Date(2021, 1, 1, 11),
    title: "Cita de trabajo",
  },
  {
    startDate: new Date(2021, 1, 1, 15),
    endDate: new Date(2021, 1, 1, 15, 30),
    title: "Cita con mi jefe",
  },
  {
    startDate: new Date(2021, 1, 1, 20),
    endDate: new Date(2021, 1, 1, 21),
    title: "Cena",
  },
];

const newAppointment = {
  startDate: new Date(2021, 1, 1, 8),
  endDate: new Date(2021, 1, 1, 9, 30),
};

// we will use one function of date-fns library
// first install it to use "npm i date-fns"
// we will use areIntervalsOverlapping function
const areIntervalsOverlapping = require('date-fns/areIntervalsOverlapping')

const isOverlap = (newDate) => {
    return dates.some(date => {
        return areIntervalsOverlapping(
            {start: date.startDate, end: date.endDate}, // date from array
            {start: newDate.startDate, end: newDate.endDate}, // date from new object
        )
    })
}

console.log('isOverlap', isOverlap(newAppointment));

/*
    In JavaScript, the some() method is used to check whether at least one element in an array satisfies a given condition.
    The method takes a callback function as its argument and applies it to each element of the array until the function returns true for any element.

    The callback function takes three arguments:

    currentValue: The current element being processed in the array.
    index: The index of the current element being processed in the array.
    array: The array on which some() is called.

    The some() method returns true if the callback function returns true for at least one element in the array, otherwise it returns false.
*/