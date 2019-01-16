// console.log('Beware, External Script running')
// console.log('Hello World, I am learning JavaScript !!')
// console.log('It\'s Awesome !!!')

var fname = 'Pradnyesh'
var lname = 'Patil'
var age = 25
console.log(fname,'say\'s Hey')

// Single Line Comments

/*
   Multi-Line Comments
*/

/*********************************
   Variable Mutation and Coercion
**********************************/

// Type Coercion
console.log(fname + ' ' + age)

// Variable Mutation
age = 'Twenty Five'

// var occupation = prompt('what do you do ?')
// console.log(fname + ' is ' + occupation)

/*********************************
   Basic Operators 
   Mathematical Operators(+,-,*,/)
**********************************/

var x = 10
var y = 12

// logical
var res = x > y
console.log(res)

// typeof operator
console.log(typeof res)
console.log(typeof x)
console.log(typeof fname)

/*********************************
   Ternary Operator
**********************************/

age = 31

age > 18 ? console.log('drinks beer') : console.log('drinks soda')

/*********************************
   Switch Statement
**********************************/

switch(true){
    case age < 13:
        console.log('boy')
        break;
    case age >= 13 && age < 20:
        console.log('teenager')
        break;
    case age >= 20 && age < 30:
        console.log('young man')
        break;
    default:
        console.log('man')
}

