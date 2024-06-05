// Context: A prime number is any whole number greater than 1 that cannot be exactly divided by any whole number 
// other than itself and 1. For example, the number 5 is prime because it cannot be divided by 4, 3, or 2; 
// it can only be divided by itself (5) and 1. Similarly, the numbers 7 and 11 are prime. As numbers become 
// larger, determining whether or not they are prime is increasingly difficult, but loops make this process relatively easy!
// Write a script that accomplishes the following:
// •	Declare an arbitrary number, n.
// •	Create a loop that searches for the next prime number, starting at n and incrementing from there.
// •	As soon as you find the prime number, log that number and exit the loop
function isNumPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;

    if (num % 2 === 0 || num % 3 === 0) return false;

    let i = 5;
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
        i += 6;
    }

    return true;
}

function findNextPrime(n) {
    let numIn = n;
    while (true) {
        if (isNumPrime(n) && n > numIn) {
            console.log("The next prime number after ", numIn, "is ", n);
            break;
        }
        n++;
    }
}
console.log("ALAB 308.3.1 PrimeTime Exercise.")
// To call it 
const n = 23;
findNextPrime(n);