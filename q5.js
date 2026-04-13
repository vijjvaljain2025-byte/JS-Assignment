// Q5: Skipping Numbers

let N = Number(prompt());
let seed = Number(prompt());

let m = 0;
let sum = 0;
let skip = seed + 2;

while (sum < N) {
    m++;
    if (m % skip !== 0) {
        sum += m;
    }
}

alert(m + " " + sum);