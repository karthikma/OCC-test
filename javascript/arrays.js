//ARRAYS
// -- can used to hold nore than one value.

let animals = ['dog', 'cat', 'fish', 'eagle', 'falcon']

//access first element in the array
console.log(animals[0]); // output dog
console.log(animals[2]);  // output fish
console.log(animals[4]);  // output falcon

animals[1] = 'Parrot';
console.log(animals);

//push() = add an item at the end of the array
animals.push('Bunny');
console.log(animals);

//pop() = remove an item from the end of the array
animals.pop();
console.log(animals);

//unshift() = add an item from the front of an array
animals.unshift('deer');
console.log(animals);

//shift() = remove an item from the front of an array
animals.shift();
console.log(animals);

//indexOf = used to find and return the index of an item in an array
let index = animals.indexOf('Parrot');
console.log(index);
console.log(animals.indexOf('Parrot'));

//length() = used to get the size of an array
console.log("The length of animals array is: ", animals.length);

//empty array
// let animals = [];

//array of mix values
let mixedArray = ['Bird', true, 12, 3.25];

/**
 Create an array and name it 'colors'
    include the colors: red, blue, green

    1. add black after the last index of the array. Then print the array
    2. remove the value blue and swap the position of green and red. Then print the array.
    3. Add the color yellow on the first index of the array. Then print the array.
 */

let colors = ['Red', 'Blue', 'Green'];
colors.push('Black');
console.log(colors);

colors.shift();
colors.shift();
colors.push('Red');

console.log(colors);



