const elements = ["Fire", "Air", "Water"];

// 'custom' join() method
let rtaFinal = '';
const separator = '--';
for (let index = 0; index < elements.length-1; index++) {
    const element = elements[index];
    rtaFinal = rtaFinal + element + separator;
} rtaFinal = rtaFinal + 'Water'; 
console.log('for', rtaFinal);

// built-in join() method
const rta = elements.join('--')
console.log('join', rta);

// built-in split() method
const title = 'Manipulacion De Arrays';

const urlFinal = title.split(' ').join('-').toLowerCase();
console.log(urlFinal);