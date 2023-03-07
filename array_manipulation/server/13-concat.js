const elements = [1,1,2,2];
const othersElements = [3,3,4,4];

// 'custom' concat() method
const newArray = [...elements]; // ...elements = clone/copy the array/object without memory reference
for (let index = 0; index < othersElements.length; index++) {
    const element = othersElements[index];
    newArray.push(element);
}
console.log('for', newArray);

// built-in concat() method
const rta = elements.concat(othersElements);
console.log('concat', rta);

// using just spread operator (be careful with this, it only accepts arrays, because in the end it splits the array)
const rta2 = [...elements, ...othersElements];
console.log('...', rta2);

// using spread operator and 'random' word, notice that spread operator split 'random' letter by letter
const rta3 = [...elements, ...'random'];
console.log('rta3', rta3);

// remember that concat() method is a mutable method, meaning that the original array will be changed

// using push(), which is a immutable method, the original array in not changed, cos another array is created
elements.push(...othersElements);
console.log('elements', elements);