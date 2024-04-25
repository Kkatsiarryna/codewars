// DESCRIPTION
// Sort the Vowels!
// In this kata, we want to sort the vowels in a special format.
// Task
// Write a function which takes a input string s and return a string in the following way:
// "CODEWARS" =>
// C|
// |O
// D|
// |E
// W|
// |A
// R|
// S|
// Notes:
// List all the Vowels on the right side of |
// List every character except Vowels on the left side of |
// for the purpose of this kata, the vowels are : a e i o u
// Return every character in its original case
// Each line is seperated with \n
// Invalid input ( undefined / null / integer ) should return an empty string

//SOLUTION
function sortVowels(s){
    if ( typeof(s) !== "string")
        return ""
    else {
        let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
        let newString = "";
        for (let i = 0; i < s.length; i++) {
            !vowels.includes(s[i]) ? newString += s[i] + "|" + "\n"  :
                newString += "|" + s[i] + "\n";
        }
        return  newString.slice(0, newString.length-1);
    }

}

console.log("sortVowels: " + sortVowels("Codewars"));
