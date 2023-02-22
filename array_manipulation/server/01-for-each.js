const letters = ['a','b','c'];

// traditional for loop
for (let index = 0; index < letters.length; index++) {
    const element = letters[index];
    console.log('for',element);
}


// forEach loop
letters.forEach(item => console.log('forEach', item))