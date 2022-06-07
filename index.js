// UTILITY
function printValue(value) {
    console.info(value)
}

// 1.0 DEFINE VARIABLES
//TODO: ADD fixed variable
// const pi=3.142
// printValue(pi);

//TODO: ADD redeclarable variable
var radius = 5;
//printValue(radius);
var radius = 4;
//printValue(radius);

//TODO: ADD re-assignable but not redeclarable variable
// let age = 8;
// age = 89
//printValue(age);

// 2.0 DIFFERENT DATA TYPES
//TODO: Create a fixed variable with a number value
const num = 12;

//TODO: Create a redeclarable variable with a boolean value
var rain = true;
printValue(rain);
var sunny = false;
printValue(rain)
printValue(rain && sunny);
printValue(rain || sunny);
printValue(rain === sunny);
//TODO: Create a re-assignable variable with a string value
let name = "Kiganjo"
name = "kamau"
printValue(name);

// 3.0 STRING OPERATIONS
//TODO: Concatenate string (+)
let firstName = "Ian";
let SecondName = "Okumu";
fullName = firstName + ' ' + SecondName;
printValue('Name:' + fullName);

//TODO: Interpolate string (`${}`)
let yetAnother = `Name: ${firstName  + ' ' + SecondName}`
printValue(`Name: ${firstName} ${SecondName}`);
printValue(yetAnother)

//TODO: Convert to uppercase
let upper = yetAnother.toUpperCase()
printValue(upper)


//TODO: Convert to lowercase
let lower = SecondName.toLowerCase()
printValue(lower)

//TODO: Index a specific character

//TODO: PRACTICE ON YOUR OWN (Check mozilla documentation)


// 4.0 COMPARISON
//TODO: strict equality
// printValue(90 === '89')
// printValue(90 === 98)

// //TODO: strict inequality !==
// printValue(45 !== 90)
// printValue(45 !== 45)

// //TODO: equality ==
// printValue(50 == '50')
// printValue(50 == 56)

// //TODO: inequality !=

// printValue(50 != '50')
// printValue(50 != '90')
//TODO: greater than >
// printValue(54 > 4)
// printValue(54 > 94)
//TODO: less than
// let numm2 = 54 ;
// let numm3= 98;
// printValue(numm2 < numm3)


//TODO: greater or equal to
// let numm2 = 54 ;
//  let numm3= 98;
//  printValue(numm2 >= numm3)

//TODO: less or equal to
// let numm2 = 54 ;
//  let numm3= 98;
//  printValue(numm2 <= numm3)


// 5.0 CONTROL FLOW
// TODO: if-else statement
// let age = 34;
// if (age >= 19) {
//     printValue("You are good to go")
// } else if (age <= 19) {
//     printValue('go back home')
// } else {
//     printValue('You are a joker go home')
// }

//TODO: switch-case
let age = 43;
switch (true) {
    case (age >= 19): {
        printValue("You are good to go")
    }
    break;
    case (age <= 19): {
    printValue('go back home')
    }
    break;
    default: {
    printValue('You are a joker go home')
    }
    break;
    }