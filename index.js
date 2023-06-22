// VARIABLES
// let, var, const

//console.log(name); // print to the console
const name = "pizza";
const topping = "pineapple";
/* adding two strings; concatenation */
console.log(name, topping);

// TEMPLATE LITERALS
console.log(`${name} ${topping}`);

console.log("32" + "100" + "string");

// integer

// booleans

// false, undefined, null, 0

const num = undefined;

console.log(Boolean(num));

//console.log(Boolean(topping));

//let prompt1 = prompt("what is your name?");
//let whereDidHeGo = prompt("where did you go ");
//console.log(prompt1 + "str");
//console.log(whereDidHeGo);
//console.log(`${prompt1}went to the ${whereDidHeGo}`);

//alert(`${prompt1}went to the ${whereDidHeGo}`);

//name age hobby alert personalied introduction message

//hi my name is i am age i like to hobby

let prompt1 = prompt("what is your name?");
let howOldAreYou = prompt("How old are you ");
let whatIsYourHobby = prompt("What is one of your hobbies? ");

alert(
  `hi my name is ${prompt1} my age is ${howOldAreYou} and i like to practise  ${whatIsYourHobby}`
);
