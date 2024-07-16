// Multiplication table of 5
for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}

// Print the sum of even numbers

let sum = 0;
for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        sum += i;
    }
}
console.log(`The sum of all even numbers between 1 and 50 is: ${sum}`);

//prime numbers from 2 to 20 
let num = 2;
while (num <= 20) {
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(num);
    }
    num++;
}

//sum of all odd numbers between 1 to 20
let num1 = 1;
let sum1 = 0;

while (num1 <= 20) {
    if (num1 % 2 !== 0) {
        sum1 += num1;
    }
    num1++;
}
console.log(`The sum of all odd numbers between 1 and 20 is: ${sum1}`);

//factorial of a given number

let num3 = 5;
let factorial = 1;

while (num3 > 0) {
    factorial *= num3;
    num3--;
}

console.log(`The factorial is: ${factorial}`);