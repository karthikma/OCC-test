/**
 * LOOPS = used to repeatedly execute a block of code until a specific condition is met.
 */

// FOR Statement

for(let x = 0; x < 10; x++){
    console.log(x);
}

for(let i=1; i<=5; i++){
    console.log('Count: ', i);
}

// WHILE Statement
// while(condition) {
//  statement;   
// }

let a = 0;
while(a < 6){
    console.log(`The value of a = ${a}`);
    a++;
}

let count = 1;
while (count < 5){
    console.log('Count :', count);
    count++;
}

//Do-while loop
let j = 1;
do{
    console.log('Do-While Count : ', j);
    j++;
} while (j <= 5)

//Short activity
/**
In this activity, the user is prompted to enter a score. Based on the score entered, the code uses conditional statements (if, else if, and else) to determine the corresponding grade. 

    If the score is 90 or above, it assigns the grade 'A'. 
    If the score is between 80 and 89, it assigns the grade 'B'. 
    If the score is between 70 and 79, it assigns the grade 'C'. 
    If the score is between 60 and 69, it assigns the grade 'D'. 

    Otherwise, if the score is below 60, it assigns the grade 'F'. The grade is then printed to the console.
 */
    let score = parseInt(prompt('Enter the score : '));

    switch(true){
        case score >= 90:
            grade = 'A';
            console.log('the grade is : ', grade);
            break;
        case score >= 80 && score <= 89:
            grade = 'B';
            console.log('the grade is : ', grade);
            break;
        case score >= 70 && score <= 79:
            grade = 'C';
            console.log('the grade is : ', grade);
            break;
        case score >= 60 && score <= 69:
            grade = 'D';
            console.log('the grade is : ', grade);
            break;
        default:
            grade = 'F'
            console.log('the grade is : ', grade);
            // prompt('The grade is : ', grade);
            break;30
    }

    /**
     *  Create a JavaScript program that prints all the numbers between a given range. 
        Prompt the user to enter the starting and ending numbers for the range. 
        Use a loop to iterate through the numbers in the range. Print each number in the console.
     */

        let start = parseInt(prompt('Enter the starting number: '));
        let end = parseInt(prompt('Enter the ending number: '));
        for(let i=start;i<=end;i++) {
            console.log(i);
        }