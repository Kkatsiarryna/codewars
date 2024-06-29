/*
Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible,
    containing distinct letters - each taken only once -
    coming from s1 or s2.
    Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"
a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"*/

//SOLUTION

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