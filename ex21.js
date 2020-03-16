// Write a JavaScript program to create new string with first 3 characters are in lower case from a given string. 
//If the string length is less than 3 convert all the characters in upper case.
function lowerCase3Chars(str) {
    if (str.length < 3) {
        return str.toUpperCase();
    } else {
        let first3Chars = str.split('').splice(0, 3).join('').toLowerCase();
        let lastChars = str.split('').splice(3).join('');
        return first3Chars + lastChars;
    }
};

console.log(lowerCase3Chars('HELLO WORLD'));
console.log(lowerCase3Chars('Hi'));
