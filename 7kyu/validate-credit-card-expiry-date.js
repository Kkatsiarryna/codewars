// DESCRIPTION
// It is a simple, real world task. You will receive a single string as input. It will have the month (2 digits) and year(2 or 4 digits).
// These are separated by one character ("-" or "/", maybe some spaces too). For example:
// 02/21
// 02 / 21
// 02 / 2021
// 02-2021
// Assume that all dates are in the XXI century.
// Your task is to write a function that returns true or false if the expiry date is not in the past. Note, current month should still return true.

//SOLUTION
function checkExpiryValid (date) {
    let arr = date.split(/\/|-/);
    if (!arr[1].includes("20")){
        arr[1] = "20" + arr[1];
    }
    let validDate = new Date(arr[1], arr[0])
    return validDate > Date.now();
}

console.log("checkExpiryValid: " + checkExpiryValid("02/21") );