
function longest(s1, s2) {
/*    let str1 = s1.split("").filter( (item,index) => s1.indexOf(item) === index).join("");
    let str2 = s2.split("").filter( (item,index) => s2.indexOf(item) === index).join("");
    return     str1.length > str2.length
        ? str1.split("").sort((a,b) => a.localeCompare(b)).join("")
        : str2.split("").sort((a,b) => a.localeCompare(b)).join("")*/

/*    let newString = s1.concat(s2);
    return newString.split("").filter( (item,index) => newString.indexOf(item) === index)
        .sort((a,b) => a.localeCompare(b)).
    join("")*/

   let str =  new Set( [...s1, ...s2]);
   return [...str].sort().join("");

}

console.log(longest("aretheyhere", "yestheyarehere")); //aehrsty
console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding")); //abcdefghilnoprstu
console.log(longest("xyaabbbccccdefww", "xxxxyyyyabklmopq")); //abcdefklmopqwxy

/*
function sumTwoSmallestNumbers(numbers) {
    var [ a, b ] = numbers.sort((a, b) => a - b)
    return [ a, b ]
/!*    numbers.sort((a,b) => a-b);
    return numbers[0] + numbers[1];*!/
   // return newArray === numbers
}

console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]));
console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43]));
*/



/*function solution(str, ending){
/!*    let len = str.length - ending.length;
    return str.split("").slice(len).join("") === ending;*!/
    return str.substr(-ending.length) === ending;
}
console.log(solution('abcde', 'cde'));*/


/*function squareSum(numbers){
    return numbers.reduce((sum, number) => sum + Math.pow(number, 2), 0);
}

console.log(squareSum([1,2,3]));*/



/*
function getSum(a, b)
{
    let result = 0;
    if ( a === b) {
        result = a;
    }else if( a < b) {
        for ( let i = a; i <= b; i++ ) {
            result += i;
        }
    } else {
        for ( let i = b; i <= a; i++ ) {
            result += i;
        }
    }
    return result;
}

console.log(getSum(1, 5));*/
