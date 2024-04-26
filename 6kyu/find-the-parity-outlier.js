// DESCRIPTION
// You are given an array (which will have a length of at least 3, but could be very large) containing integers.
// The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N.
// Write a method that takes the array as an argument and returns this "outlier" N.
//     Examples
// [2, 4, 0, 100, 4, 11, 2602, 36] -->  11 (the only odd number)
// [160, 3, 1719, 19, 11, 13, -21] --> 160 (the only even number)

//SOLUTION
function findOutlier(integers){
    let arr1 = [];
    let arr2 = [];
    for( let i = 0; i < integers.length; i++){
        if(integers[i] % 2 === 0 ) {
            arr2.push(integers[i]);
        }
        else {
            arr1.push(integers[i]);
        }
    }
    return  arr1.length === 1 ? arr1[0] : arr2[0]
}

console.log("findOutlier: " + findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]) );