function placeOrder(callback) {
    console.log("Order placed");
    setTimeout(callback, 1000);
}

function cookFood(callback) {
    console.log("Food cooking");
    setTimeout(callback, 1000);
}

function deliverFood() {
    console.log("Food delivered");
}

placeOrder(() => cookFood(deliverFood));
