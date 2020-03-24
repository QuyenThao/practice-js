/**
 * You are given some string where you need to find its middle characters.The string may contain one word, 
 * a few symbols or a whole sentence. If the length of the string is even, then you should return two middle 
 * characters, but if the length is odd, return just one. For more details look at the Example.
 * Input: A string.
 * Output: The middle characters.
 */
function middle(text) {
    if (text.length % 2 == 1) {
        return text[Math.floor(text.length / 2)];
    } else {
        return text[text.length / 2 - 1] + text[text.length / 2]
    }
}
console.log(middle('example'))
console.log(middle('I'))
console.log(middle('No'));
console.log(middle('test'));