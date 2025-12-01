let totalSeats = 120;
let bookedSeats = 78;

let available = totalSeats - bookedSeats;
let status =
    available < 20 ? "Almost Full" :
    available <= 60 ? "Moderate Availability" :
    "Plenty of Seats Available";

console.log("Seats left:", available);
console.log("Status:", status);
