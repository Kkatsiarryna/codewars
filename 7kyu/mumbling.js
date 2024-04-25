// DESCRIPTION
// This time no story, no theory. The examples below show you how to write function accum:
//     Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

//SOLUTION
function accum(s) {
    let str = s.toLowerCase();
    let num = str.length;
    let str2 = "";

    for(let i = 0 ; i < s.length-1; i++){
        str2 += str[i].toUpperCase() + str[i].repeat(i) + '-'
    }
    let str3 = str2 + str[num-1].toUpperCase() + str[num-1].repeat(num-1)

    return str3;
}

console.log("accum: " + accum("abcd"));