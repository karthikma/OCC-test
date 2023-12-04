//Type Coercion

//Numbers
let number = "123"
console.log(typeof number);

//--conver using Number()
convertedNumber = Number(number);
console.log(typeof convertedNumber)

//String
let num = 123;
console.log(typeof num);

//--convert using String()
convertedString = String(num);
console.log(typeof (convertedString));

// num.toString()

//Boolean
// false = 0, null, undefined, NaN, ""
let boolValue = Boolean(0);
console.log(boolValue);

boolValue = Boolean("Hello");
console.log(boolValue);

// =========================
console.log(1 + "1");
console.log([3, 4] + "1");


// =======================
//ARITHMETIC OPERATORS
// +, -, *, **, /, %, ++, --

let x = 5;
let y = 2;

let sum = x + y;
console.log("Sum is:", sum);

let diff = x - y;
console.log("Difference is:", diff);

let prod = x * y;
console.log("Product is:", prod);

let quote = x / y;
console.log("Quotient is:", quote);

let remainder = x % y;
console.log("Reminder is:", remainder);

sum++;
diff--;

console.log("Sum++ :", sum, "Diff-- :", diff);

let message = "Hello " + "world!";
console.log(message);

let samp = "Hi" + 10;
console.log(samp);


// ASSIGNMENT OPERATORS " = "


// equal to " == "
// Addition Assignment " += " -> x +=y -> x=x+y
// Subtraction Assignment " -= " -> x -=y -> x=x-y
// Multiplication Assignment " *= " -> x *=y -> x=x*y
// Division Assignment " /= " -> x /=y -> x=x/y

let a = 10;
let b = 5;

a += b; // a = a + b
console.log("a: ", a);

a -= b; // a = a - b
console.log("a: ", a);

a *= b; // a = a * b
console.log("a: ", a);

a /= b; // a = a / b
console.log("a: ", a);
