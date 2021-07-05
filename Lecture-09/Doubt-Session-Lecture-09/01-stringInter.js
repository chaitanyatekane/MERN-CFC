let n1 = 10;
let n2 = 20;
let sum = n1+n2;

console.log("This sum of " + n1 + " and " + n2 + " is " + sum);

// Better Way Below
console.log(`This sum of ${n1} and ${n2} is ${sum}`);
console.log(`This sum of ${n1} and ${n2} is ${n1+n2}`);

function sayHello(){
    return "Hello";
}
console.log(`Say ${sayHello()}`);

/* 
Sample Output :-
This sum of 10 and 20 is 30
This sum of 10 and 20 is 30
This sum of 10 and 20 is 30
Say Hello
*/