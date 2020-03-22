/**
 * You are given a string where you have to find its first word.
 * This is a simplified version of the First Word mission.
 * Input string consists of only english letters and spaces. 
 * There aren’t any spaces at the beginning and the end of the string.
 * Input: A string.
 * Output: A string.
 */
function firstWord(str) {
    return str.split(' ')[0];
}
console.log(firstWord("Hello world"));
console.log(firstWord("a word"));