//Write a JavaScript program to create a new string from a given string changing the position of first and last characters. 
//The string length must be greater than or equal to 1.
function changePos(str) {
    if (str.length <= 1) {
        return str;
    } else {
        let chars = str.split('');
        chars.splice(0, 1, chars[str.length - 1]);
        chars.splice(str.length - 1, 1, str[0]);
        return chars.join('');
    }
}
console.log(changePos('JavaScript'));
console.log(changePos('Hello'));
console.log(changePos('q'));