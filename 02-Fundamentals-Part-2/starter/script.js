'use strict';

// functions

/*
function logger() {
    console.log(`Ryan is my name!`)
}

logger()


function fruitProcessor(apples, oranges) {
    let juice = `Juice with ${apples} apples and ${oranges} oranges.`
    return juice
}

let myJuice = fruitProcessor(3, 4);
console.log(myJuice)

console.log(fruitProcessor(8, 1))



function ageCalc1(birthYear) {
    return 2037 - birthYear;
}

let rlhAge = ageCalc1(1979)

const ageCalc2 = function (birthYear) {
    return 2037 - birthYear
}

console.log(rlhAge - ageCalc2(1993))

// Arrow functions return what you ask for
const ageCalc3 = birthYear => 2037 - birthYear
console.log(ageCalc3(2002))


//  Arrays

let stocks = new Array('MDB', 'TTD', 'NTES') // or let stocks = ['MDB', 'TTD', 'NTES']
console.log(stocks)

stocks[3] = 'ORCL'
console.log(stocks)

stocks.push('CRM', 'AMZN')
console.log(stocks)

stocks.unshift('SPY')
console.log(stocks)

stocks.pop()
console.log(stocks)

stocks.shift()
console.log(stocks)

console.log(stocks.indexOf('NTES'))

console.log(stocks.includes('AMZN'))

if (stocks.includes('MDB')) {
    console.log('About to be rich!')
} else {
    console.log('Bout to be poor!')
}


// Objects
let person = {
    firstName: 'Ryan',
    lastName: 'Harper',
    job: 'programmer',
    stocks: ['MDB', 'TTD']
}

console.log(person)
console.log(person.job)
console.log(person['job'])

// let input = prompt('What do you want to know about Ryan? firstName, lastName, job, or stocks?')
// console.log(`${person.firstName}'s ${input} is ${person[input]}`)

person.location = 'Virginia'
console.log(person)



let person = {
    firstName: 'Ryan',
    lastName: 'Harper',
    job: 'programmer',
    stocks: ['MDB', 'TTD'],
    hasCertificate: true,
    birthYear: 1979,
    pronoun: 'he',
    calcAge: function () {
        this.age = 2023 - this.birthYear
        return this.age
    },
    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year-old ${this.job}, and ${this.pronoun} has ${this.hasCertificate ? 'an' : 'no'} AWS certificate`
    },
};

console.log(person.calcAge())

console.log(person.getSummary())



//  for loops
for (let i = 1; i <= 10; i++) {
    console.log(`${i} is the number`)
}


let person = [
    'Ryan',
    'Harper',
    'programmer',
    ['MDB', 'TTD'],
];

for (let i = 0; i < person.length; i++) {
    console.log(person[i], typeof person[i])
}

let i = 1
while (i < 11) {
    console.log(i)
    i++
}

*/
