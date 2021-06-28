// npm i readline-sync

var readlineSync = require('readline-sync');

var age = readlineSync.question('What is your age? ');

console.log(age);
console.log(typeof age); // string
console.log(typeof(parseInt(age))); // number