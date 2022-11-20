// Single-line comment
/*
Multi-line commnet

Exercise Time!

1) Create three new variables:
   - A variable that stores the name of an online course of your choice
   - A variable that stores the price of that course
   - A variable that stores the three main goals that you have, when taking this course
*/
let name = 'Python Data Analytics Bootcamp';
let price = 6000;
let goals = ['Analyze data with NumPy', 'Analyze data with Pandas', 'Create visualizations'];

// 2) Output ("alert") the three variable values
alert(name);
alert(price);
alert(goals);

// 3) Try "grouping" the three variables together and still output their values thereafter
let grouping = [name, price, goals];
alert(name);
alert(price);
alert(goals);
alert(grouping);

let course = { // 3 using object value and creating properties
    nombre: 'Python Data Analytics Bootcamp',
    precio: 6000,
    objetivos: ['Analyze data with NumPy', 'Analyze data with Pandas', 'Create visualizations']
};
alert(course.nombre); // accessing properties with 'dot notation'
alert(course.precio);
alert(course.objetivos);

// 4) Also output the second element in your "main goals" variable
alert(goals[1]);
alert(course.objetivos[1]); // Accessing the same value but with different way

/*
5) Add a custom command that does the following:
   - Use your "main goals" variable and access an element by its identifier
   - The concrete identifier value should be dynamic / flexible 
     (i.e. the command can be executed for different identifier)
   - The "main goals" variable should also be dynamic: The command should work 
     with ANY list of values
   - The custom command should provide the accessed value (i.e. the list element)
*/
function getElement(array) {
    alert(array)
};

function getItem(array, index) { // another way, using two parameters and a new variable
    let property = array[index];
    return property;
};

// 6) Execute your custom command from (5) and output ("alert") the result
getElement(goals[0]);
getElement(goals[1]);
getElement(goals[2]);

let firstObjetivo = getItem(course.objetivos, 0);
alert(firstObjetivo);