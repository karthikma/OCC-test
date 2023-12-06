//Control Structures -- controls the flow of execution based on certain conditions

//CONDITIONAL STATEMENTS
//-- allows you to execute different blocks of code based on a condition

// if .. else statement
// -- allows you to create a program that runs omly if a specific condition is met.
let age = 18;
if(age >= 18) {
    console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote");
}

//if-else if-else
let temp = 25;

if (temp < 0) {
    console.log("It's freezing");
} else if (temp >= 0 && temp < 20) {
    console.log("It's a cold day.");
} else {
    console.log("It's a warm day.");
}

// switch..case statement
// --- allows you to control the execution flow of your code

let day = 'Monday';

switch(day) {
    case 'Monday' :
        console.log("It's the start of the week");
        break;
    case 'Friday' :
        console.log("It's the end of the week");
        break;
    default:
        console.log("It's a regular day");
        break;
}

let number = 5;

switch(number) {
    case 1 :
        console.log("The number is 1");
        break;
    case 2:
        console.log("The number is 2");
        break;
    case 3:
        console.log("The number is 3");
        break;
    case 4:
        console.log("The number is 4");
        break;
    case 5:
        console.log("The number is 5");
        break;
    default:
        console.log("The Number is not 1-5");
        break;
}

console.log("Short activity===");

let is_num =15;
switch(true) {
    case(is_num >= 1 && is_num <= 10):
        console.log("The number is between 1 and 10.");
        break;
    case(is_num >= 11 && is_num <= 20):
        console.log("The number is between 11 and 20.");
        break;
    case(is_num >= 21 && is_num <= 30):
        console.log("The number is between 21 and 30.");
        break;
    default:
        console.log("The number is between 1 and 30.");
        break;

}

/*
Create a switch..case statement with the following conditions:
// Students that got an A will get a Pasta
// Students that got a B will get an Ice Cream
// Students that got a C will get a Candy
// For any other value, print "No reward to give."
*/

let grade = "D";
switch(grade) {
    case "A" :
        console.log("Will get a Pasta");
        break;
    case "B" :
        console.log("Will get an Ice cream");
        break;
    case "C" :
        console.log("Will get a Candy");
        break;
    default :
        console.log("No reward to give");
        break;
}