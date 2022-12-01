/*
1. Print out all numbers from 1 to 100.
2. If the number is divisible by BOTH 3 and 5, replace number with "Buzz".
3. If the number is divisible by 3 but NOT 5, replace number with "Fizz".
*/

for (let num = 1; num <= 100; num++) {
    if ( (num % 3 === 0) && (num % 5 === 0) ) {
        console.log("Buzz");
    } else if (num % 3 === 0) {
        console.log("Fizz");
    } else {
        console.log(num);
    }
}