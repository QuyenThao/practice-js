/**
 * You are given a string where you have to find its first word.
 * When solving a task pay attention to the following points:
 * There can be dots and commas in a string.
 * A string can start with a letter or, for example, a dot or space.
 * A word can contain an apostrophe and it's a part of a word.
 * The whole text can be represented with one word and that's it.
 * Input: A string.
 * Output: A string.
 * Precondition: the text can contain a-z A-Z , . '
 */
function firstWord(a, b) {
    let a1 = a.split(/[.|,|?|!| |;|_|*|&|-]/g);
    let input = [];
    for (let i = 0; i < a1.length; i++) {
        if (a1[i] !== '') {
            input.push(a1[i]);
        }
    }
    return input[0];
}
console.log(firstWord("... and so on ..."));