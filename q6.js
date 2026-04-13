// Q6: Contest Score Judge

let a = Number(prompt());
let b = Number(prompt());
let c = Number(prompt());

let score = 3 * a + b - 2 * c;

if (score < 0)
    score = 0;

if (a + b + c > 50)
    score -= 10;

let status = (score >= 60) ? "PASS" : "FAIL";

alert(score + ", " + status);