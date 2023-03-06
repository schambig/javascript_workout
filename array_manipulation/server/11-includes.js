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

/*
The includes() method is a built-in method in JavaScript
that is used to determine whether an array includes a certain value among its elements.
The method returns a boolean value indicating whether the specified value is found in the array or not.
*/

/*
Tu reto es retornar un array solo con las palabras que cumplan con la condición de tener un término de búsqueda dado.

Para solucionarlo vas a encontrar una función llamada filterByTerm que recibe los siguientes parámetros de entrada:

array: Un array de strigs con palabras
term: Un string con el término a buscar
Dentro del cuerpo de la función filterByTerm debes escribir tu solución.

Ejemplo 1:

Input:
array: ["ana", "santi", "nico", "anastasia"]
term: "ana"

Ouput:
["ana", "anastasia"]

Ejemplo 2:

Input:
array: ["ana", "santi", "nico", "anastasia"]
term: "xyz"

Output:
[]

===============================================

export function filterByTerm(array, term) {
  return array.filter(item => {
    return item.includes(term)
  })
}
*/