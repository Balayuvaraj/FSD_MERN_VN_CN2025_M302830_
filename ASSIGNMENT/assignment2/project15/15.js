let expenses = [2000, 1500, 3500, 4000];

function totalSpent(arr) {
    return arr.reduce((a, b) => a + b);
}

console.log("Total =", totalSpent(expenses));
