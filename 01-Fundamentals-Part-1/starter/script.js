/* intro code
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

let firstName = 'Ryan';
console.log(firstName + ' is ' + js);


// first lecture assignment
let country = 'United States';
let contintent = 'North America';
let population = 350000000;

console.log(country)
console.log(contintent)
console.log(population)

// side code
let stockArray = ['MDB', 'TTD', 'CSCO']
console.log(stockArray)
console.log(stockArray[1])


// data types
let person = {
    firstName: 'Ryan',
    lastName: 'Harper',
    email: 'ryanlharper@gmail.com',
    age: 44,  // numbers are float or int
};

console.log(person.email);
console.log(person);

console.log(typeof person.firstName);
console.log(typeof person.age);

// data types assignemnt
let isIsland = false;
let language;
let country = 'United States';
let contintent = 'North America';
let population = 350000000;

console.log(typeof country);
console.log(typeof contintent);
console.log(typeof population);
console.log(typeof isIsland);



// template literals
let firstName = 'Ryan';
let literal = `I am ${firstName}`;  // using backticks allows for this, can be used for all strings
console.log(literal)


// if () then {} elseif {} else {}
if (8 > 7) { console.log('Yes.') };

if (6 > 7) {
    console.log('Yes')
} else {
    console.log('No')
};



let user_input;
user_input = prompt('Enter a number: ');

if (Number(user_input)) {
} else {
    user_input = prompt('Enter a NUMBER: ')
}

user_input = Number(user_input)
console.log(user_input)



// && is AND
// || is OR

selection = prompt("Dog or Cat?").toLowerCase();
selection === 'dog' ? console.log(`Dog Lover!`) : console.log(`Cat Lover!`); // stis is only for two options

*/



