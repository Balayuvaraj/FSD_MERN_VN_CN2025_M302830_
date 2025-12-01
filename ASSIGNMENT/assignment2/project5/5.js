let nums = [10, 40, 25, 90, 5];

let sum = nums.reduce((a, b) => a + b);
let largest = Math.max(...nums);

console.log("Sum =", sum);
console.log("Largest =", largest);
