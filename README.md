# JS-Assignment

## Fundamentals of Web Design – Assignment 4

This repository contains solutions to 6 JavaScript problems using basic concepts such as loops, and functions. All inputs are taken using `prompt()` and outputs are displayed using `alert()` as per instructions.


## Question 1: Digit Gatekeeper

* Iterated from L to R.
* Checked if the number is divisible by K.
* Extracted digits and computed their sum.
* Ensured no digit is 0.
* Checked if the digit sum is prime.

*Time Complexity:* O((R - L) × logN)

---

## Question 2: Roll-Seed Lock

* Started with N and repeated the transformation 3 times.
* If even, divided by 2 and added seed.
* If odd, multiplied by 3 and subtracted seed.
* Checked if result is a 3-digit number and middle digit equals seed.

*Time Complexity:* O(1)

---

## Question 3: Mirror Corridor

* Try values of X from 0 to 100000.
* For each X, compute N + X.
* Check if it is divisible by K and is a palindrome.
* Return the smallest valid X.

*Time Complexity:* O(100000 × logN)

---

## Question 4: Fare Calculator

* Start with base + 7 × distance.
* Apply conditions for late time and long distance.
* Adjust fare based on seed (odd/even).
* Round up to nearest multiple of 5.

*Time Complexity:* O(1)

---

## Question 5: Skipping Numbers

* Increment m starting from 1.
* Add numbers not divisible by (seed + 2).
* Stop when sum ≥ N.

*Time Complexity:* O(m)

---

## Question 6: Contest Score Judge

* Compute score = 3a + b − 2c.
* If negative, set to 0.
* Apply penalty if total submissions exceed 50.
* Determine PASS/FAIL based on score.

*Time Complexity:* O(1)