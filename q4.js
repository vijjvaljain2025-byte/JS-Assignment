// Q4: Fare Calculator

let base = Number(prompt());
let distance = Number(prompt());
let minutesLate = Number(prompt());
let seed = Number(prompt());

let fare = base + 7 * distance;

if (minutesLate > 15)
    fare += 20;

if (distance > 10)
    fare += Math.floor(0.1 * fare);

if (seed % 2 === 1)
    fare -= seed;
else
    fare += seed;

fare = Math.ceil(fare / 5) * 5;

alert(fare);