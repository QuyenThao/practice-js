// Write a JavaScript program to create a new string using the first and last n characters from a given string. 
// The string length must be greater or equal to n.
function firstLastNChars(str, n) {
    let chars = str.split('');
    let newStr = '';
    newStr += chars.splice(0, 1);
    newStr += chars.splice(str.length - 1 - n, n);
    let rel = newStr.split(',').join('');
    return rel;
}
console.log(firstLastNChars('helloWorld', 3));
console.log(firstLastNChars('Always deliver more than expected. - Larry Page', 10)); //ALarry Page
console.log(firstLastNChars('h', 2));