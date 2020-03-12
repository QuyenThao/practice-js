// Write a JavaScript program to create a new string adding "Py" in front of a given string. 
//If the given string begins with "Py" then return the original string.
function pyString(str) {
    if (str.indexOf('Py') == 0) {
        return str;
    } else {
        return 'Py' + str;
    }
}

console.log(pyString('Pyjdghjsgh'));
console.log(pyString('abcdef'));
console.log(pyString(''));