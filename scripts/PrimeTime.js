function isPrime(num) {
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
    while (true) {
        if (isPrime(n)) {
            console.log("Next prime number after", n, "is", n);
            break;
        }
        n++;
    }
}

// Example usage
const n = 20; // Change this to any arbitrary number
findNextPrime(n);