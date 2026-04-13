// Q3: Mirror Corridor

function isPalindrome(n) {
    let original = n;
    let rev = 0;

    while (n > 0) {
        rev = rev * 10 + (n % 10);
        n = Math.floor(n / 10);
    }

    return original === rev;
}

let N = parseInt(prompt("Enter N:"));
let K = parseInt(prompt("Enter K:"));

let answer = -1;

for (let X = 0; X <= 100000; X++) {
    let val = N + X;

    if (val % K === 0 && isPalindrome(val)) {
        answer = X;
        break;
    }
}

alert(answer);