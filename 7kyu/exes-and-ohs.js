// DESCRIPTION
// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
// Examples input/output:
// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

//SOLUTION
function XO(str) {
    str = str.toLowerCase();
    let arrX = [];
    let arrO = [];
    for( let i = 0; i < str.length; i++ ){
        if(str[i] === "x"){
            arrX.push(str[i]);
        }
        if(str[i] === "o"){
            arrO.push(str[i]);
        }
    }
    return arrX.length === arrO.length;
}

console.log("XO: " + XO("ooxx") );