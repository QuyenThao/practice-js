/*
* For the input of your function, you will be given one sentence. You have to return a corrected version, that starts with 
* a capital letter and ends with a period (dot). Pay attention to the fact that not all of the fixes are necessary. If a 
* sentence already ends with a period (dot), then adding another one will be a mistake.
* Input: A string.
* Output: A string. 
*/
function correctSentence(text) {
    let chars = text.split('');
    chars.splice(0, 1, text[0].toUpperCase());
    if (chars[chars.length -1] === '.') {
        return chars.join('');
    }
    return chars.join('') + '.';
}
console.log(correctSentence("greetings, friends."));
console.log(correctSentence("hi"));