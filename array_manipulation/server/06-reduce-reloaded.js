const items = [1, 3, 2, 3, 3, 2];

// this reduce method returns an object
const rta = items.reduce((obj, item) => {
    if (!obj[item]) {
        obj[item] = 1;
    } else {
        obj[item] = obj[item] + 1;
    }
    return obj;
}, {});

console.log(rta);

const data = [
  {
    name: "Salomon",
    level: "low",
  },
  {
    name: "Andrea",
    level: "medium",
  },
  {
    name: "Zulema",
    level: "high",
  },
  {
    name: "Santiago",
    level: "low",
  },
  {
    name: "Valentina",
    level: "medium",
  },
  {
    name: "Lucia",
    level: "high",
  },
];


// this code uses two methods to return an object
const rta1 = data
.map(item => item.level)
.reduce((obj, item) => {
    if (!obj[item]) {
        obj[item] = 1;
    } else {
        obj[item] = obj[item] + 1;
    }
    return obj;
}, {});

console.log(rta1);

/**
    The reduce() method is another built-in array method in JavaScript that allows you to reduce an array of values to a single value. 
    It works by iterating over the elements of an array and accumulating a single value based on the result of a callback function.

    The reduce() method takes two arguments:

        A callback function that is executed on each element of the array.
        An optional initial value for the accumulator.
    
    The callback function takes two arguments:

        An accumulator that accumulates the results of each iteration.
        The current element being processed in the array.
        
    The callback function should return the new value of the accumulator after each iteration.
 */