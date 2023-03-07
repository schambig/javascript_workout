const products = [
    { title: "Pizza", price: 121, id: "🍕" },
    { title: "Burger", price: 121, id: "🍔" },
    { title: "Hot cakes", price: 121, id: "🥞" },
  ];
  const myProducts = [];
  console.log("products", products);
  console.log("myProducts", myProducts);
  console.log("-".repeat(10));

  const productIndex = products.findIndex(item => item.id === '🍔'); // find index of '🍔'
  if (productIndex !== -1) { // findIndex() return 1 in success, and -1 otherwise
      myProducts.push(products[productIndex]); // add to myProducts
      products.splice(productIndex, 1); // delete from products
  }
  console.log("products", products);
  console.log("myProducts", myProducts);
  console.log("-".repeat(10));
  
  // Update
  const productsV2 = [
      { title: "Pizza", price: 121, id: "🍕" },
      { title: "Burger", price: 121, id: "🍔" },
      { title: "Hot cakes", price: 121, id: "🥞" },
    ];
  const update = {
      id: "🥞",
      changes: {
          price: 200,
          description: 'delicioso'
      }
  }
  const productIndexV2 = productsV2.findIndex(item => item.id === update.id);
  productsV2[productIndexV2] = {
      ...productsV2[productIndexV2],
      ...update.changes,
  };
  console.log(productsV2);

/*
The push() method adds one or more elements to the end of an array and returns the new length of the array. Here's an example:

    const fruits = ['apple', 'banana', 'orange'];
    const newLength = fruits.push('grape', 'pineapple');

    console.log(fruits); // Output: ['apple', 'banana', 'orange', 'grape', 'pineapple']
    console.log(newLength); // Output: 5

    In this example, we use push() to add the strings 'grape' and 'pineapple' to the fruits array.
    The push() method returns the new length of the array, which is 5 in this case.

The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements.
The method takes three arguments:
    the index at which to start changing the array,
    the number of elements to remove,
    and (optionally) the elements to add. Here's an example:

    const fruits = ['apple', 'banana', 'orange', 'grape', 'pineapple'];

    // Remove 'banana' and 'orange', and add 'peach'
    const removed = fruits.splice(1, 2, 'peach');

    console.log(fruits); // Output: ['apple', 'peach', 'grape', 'pineapple']
    console.log(removed); // Output: ['banana', 'orange']

    In this example, we use splice() to remove two elements starting at index 1 (i.e., the elements 'banana' and 'orange'),
    and add the string 'peach' in their place.
    The splice() method returns an array containing the removed elements, which in this case is ['banana', 'orange'].
    The fruits array now contains ['apple', 'peach', 'grape', 'pineapple'].
*/