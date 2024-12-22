// DESCRIPTION
// Given a list and a number, create a new list that contains each number of list at most N times, without reordering.
//     For example if the input number is 2, and the input list is [1,2,3,1,2,1,2,3], y
// ou take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times,
//     and then take 3, which leads to [1,2,3,1,2,3].
//     With list [20,37,20,21] and number 1, the result would be [20,37,21].

//SOLUTION

// function deleteNth(arr,n){
//     const counts = {}
//     return arr.filter((el) => {
//         counts[el] = (counts[el] || 0) + 1
//         return counts[el] <= n
//     })
// }

//SOLUTION 2
// function deleteNth(arr,n){
//     new_arr = []
//     arr.forEach((element) => {
//         if (new_arr.filter(i => i === element).length < n){
//             new_arr.push(element);
//         }
//     })
//     return new_arr;
// }


//SOLUTION 3
const deleteNth = (arr,x) => arr.filter((e,i)=> arr.slice(0,i).filter(f=>f === e).length < x );

//arr.slice(0,i).filter      [20,20].length < 1 false


console.log(deleteNth([20,37,20,21,20], 2));
console.log(deleteNth([1,1,3,3,7,2,2,2,2], 3));
console.log(deleteNth([12,39,19,39,39,19,12], 1));

//result
// [ 20, 37, 20, 21 ]
//     [
//     1, 1, 3, 3,
//         7, 2, 2, 2
//     ]
//     [ 12, 39, 19 ]
