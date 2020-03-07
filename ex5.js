//Write a JavaScript program to remove a character at the specified position of a given string and return the new string.
function remove_char(str, char_pos) {
    let chars = str.split('');
    chars.splice(char_pos, 1);
    return chars.join('');
}
console.log(remove_char('Hello World', 5));
console.log(remove_char('Hello World', 2));
console.log(remove_char('JavaScript', 6));