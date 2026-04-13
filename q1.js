// Q1: Digit Gatekeeper

function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}

let L = parseInt(prompt("Enter L:"));
let R = parseInt(prompt("Enter R:"));
let K = parseInt(prompt("Enter K:"));

let count = 0;

for (let x = L; x <= R; x++) {
    if (x % K !== 0) continue;

    let num = x;
    let sum = 0;
    let hasZero = false;

    while (num > 0) {
        let d = num % 10;
        if (d === 0) {
            hasZero = true;
            break;
        }
        sum += d;
        num = Math.floor(num / 10);
    }

    if (!hasZero && isPrime(sum)) {
        count++;
    }
}

alert(count);