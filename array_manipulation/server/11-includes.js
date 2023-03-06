const pets = ['cat', 'dog', 'bat'];

// 'custom' includes() method
let includeInArray = false;
for (let index = 0; index < pets.length; index++) {
    const element = pets[index];
    if (element === 'dog') {
        includeInArray = true;
        break;
    }
}
console.log('for:', includeInArray);

// built-in includes() method
const rta = pets.includes('dog')
console.log('includes:', rta);