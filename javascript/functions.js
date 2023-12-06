//FUNCTIONS == written to perform a specific task.
// function function_name () {

// }

function greet(){
    console.log("Hello")
}

greet();

//parameters and arguments
//parameters = variables used to accept inputs given when the function is called.
//argument = input you need to pass to fill the parameter

function greet(name){
    console.log('Hello', name);
}

greet('Jane');

function greet(name, age) {
    console.log('Hello', name);
    console.log('You are', age);
}

greet('Nate', 25);

//default parameters
function weather(status = "Rainy"){
    console.log(`It's ${status} today`);
}

weather();
weather('Sunny');
weather(null);

//return statement
//used to return a value back to the caller

function sum(a, b){
    return a + b;
}

let result = sum(3,2);
console.log(result);

function checkAge(my_age){
    if (my_age > 18){
        return "You are now of legal age"
    }
    return "You are still a minor"

}

console.log(checkAge(20));
console.log(checkAge(12));

//Variable Scope
let myGreetings = "Hello World2!"

function greetings(){
    let myGreetings = "Hello World!"
    console.log(myGreetings);
}

greetings();
// console.log(myGreetings); //will throw an error due to variable scope

//Arrow function
//-- allows you to write JS functions w/ a shorter, more concise syntax

function greetings(name){
    console.log('Hello', name);
}

greetings('John');

const greetings = (name) => {
    console.log('Hello', name);
}

greetings('John');

//greetings = variable that holds the function
//(name) = parameter
// => indicate the beginning of the function

function sumTwo (num) {
    return num + 2;

}

const sumTwo = (num) => num + 2;

const greetings = () => {
    console.log('Hello World');
    console.log('Good morning');
}

const sumThree = num => num + 3;

