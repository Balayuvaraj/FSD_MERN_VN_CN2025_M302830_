let d1 = 300;
let d2 = 200;

let msg = d1 > d2
    ? `Person 1 earns more by ₹${d1 - d2}`
    : `Person 2 earns more by ₹${d2 - d1}`;

console.log(msg);
