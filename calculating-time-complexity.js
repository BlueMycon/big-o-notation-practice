// Step Two: Calculating Time Complexity
// Determine the time complexities for each of the following functions.
// If you’re not sure what these functions do,
// copy and paste them into the console and experiment with different inputs!

function logUpTo(n) {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}
// Time Complexity: O(n)


function logAtLeast10(n) {
  for (let i = 1; i <= Math.max(n, 10); i++) {
    console.log(i);
  }
}
// Time Complexity: O(n)

function logAtMost10(n) {
  for (let i = 1; i <= Math.min(n, 10); i++) {
    console.log(i);
  }
}
// Time Complexity: O(1)

function onlyNumsAtEvenIndexes(nums) {
  let numsAtEvens = [];

  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0) {
      numsAtEvens.push(nums[i]);
    }
  }

  return numsAtEvens;
}
// Time Complexity: O(n)


function runningSubtotals(nums) {
  let subtotals = [];

  for (let i = 0; i < nums.length; i++) {
    let subtotal = 0;
    for (let j = 0; j <= i; j++) {
      subtotal += nums[j];
    }
    subtotals.push(subtotal);
  }

  return subtotals;
}
// Time Complexity: O(n^2)


const VOWELS = "aeiouAEIOU";

function vowelsCounts(word) {
  let vowelsToCounts = {};

  for (let char of word) { // O(n) grows with "word"
    if (VOWELS.includes(char)) { // O(1) b/c always 10 steps
      if (char in vowelsToCounts) { // O(1)
        vowelsToCounts[char] += 1;
      } else {
        vowelsToCounts[char] = 1;
      }
    }
  }

  return vowelsToCounts;
}
// Time Complexity: O(n)