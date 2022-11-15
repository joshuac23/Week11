// activity 1: using 'function'

// function greet(input) {
//     console.log(`Hello ${input}!`)
// }

// let input = 'Joshua';
// greet(input);


// activity 2: defining anonymous function

// let greet = function(input) {
//     console.log(`Hello ${input}!`);
// };

// greet("Joe");


// activity 2: defining function with arrow notation
// let greet = (input) => {
//     console.log(`Hello ${input}!`);
// }

// greet("Joseph");


// activity 3: using default values as a parameter
// function greet(name, time='Day') {
//     console.log(`Hello ${name}, good ${time}!`)
// };

// greet("Dave");
// greet("Dave", "Night");




let shopping_list = ['cheese', 'bread', 'ham', 'red pepper'];
const unordered_list_element = document.querySelector(".shopping"); // DOM element

function populate_list(list) {
    for (let i = 0 ; i<list.length ; i++) {
        const list_item_element = document.createElement("li"); // for each item, create an li and append to unordered_list_element
        list_item_element.textContent = list[i]; // items still in memory, needs to be appended
        unordered_list_element.appendChild(list_item_element); // appending to the dom element
    }
}

populate_list(shopping_list)


