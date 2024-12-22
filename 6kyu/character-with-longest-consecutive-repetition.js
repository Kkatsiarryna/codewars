// DESCRIPTION
// For a given string s find the character c (or C) with longest consecutive repetition and return:
//
// [c, l]
// where l (or L) is the length of the repetition. If there are two or more characters with the same l
// return the first in order of appearance.
//
//     For empty string return:
//
// ["", 0]

//SOLUTION
// function longestRepetition(s) {
//     let maxCount = 0;
//     let currentCount = 0;
//     let currentCharacter = ''
//     let resultCharacter = ''
//
//     for(let i = 0; i < s.length; i++) {
//         if(s[i] === currentCharacter) {
//             currentCount++
//         }else{
//             currentCharacter = s[i]
//             currentCount = 1
//         }
//         if(currentCount > maxCount){
//             maxCount = currentCount
//             resultCharacter = s[i]
//         }
//     }
//     return [resultCharacter, maxCount]
// }

//SOLUTION 2
// function longestRepetition(s) {
//     let last = '', lastCount = 0, max = [last, lastCount];
//     for (const c of s) {
//         if (c == last) {
//             ++lastCount;
//         } else {
//             last = c;
//             lastCount = 1;
//         }
//         if (max[1] < lastCount) max = [last, lastCount];
//     }
//     return max;
// }


//SOLUTION 3
const longestRepetition = s => s ?
    s.match(/(.)\1*/g) //[ 'aaaa', 'bb' ]
        .map((s, i) => [s[0], s.length, i]) //[ [ 'a', 4, 0 ], [ 'b', 2, 1 ] ]
        .sort((a, b) => (b[1] - a[1]) || (a[2] - b[2]))[0] //[ 'a', 4, 0 ]
        .splice(0, 2) : //[ 'a', 4 ]
    ['', 0];

console.log(longestRepetition("aaaabb"))
console.log(longestRepetition("cbdeuuu900"))

//result
//     [ 'a', 4 ]
//     [ 'u', 3 ]
