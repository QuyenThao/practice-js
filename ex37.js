/**
 * Let's continue examining words. You are given two string with words separated by commas. Try to find what is common 
 * between these strings. The words are not repeated in the same string. Your function should find all of the words that
 *  appear in both strings. The result must be represented as a string of words separated by commas in alphabetic order.
 * Input: Two arguments as strings.
 * Output: The common words as a string.
 */
function commonWords(first, second) {
    let common = [];
    let chars1 = first.split(',');
    let chars2 = second.split(',');
    for (let i = 0; i < chars1.length; i++) {
        for(let j = 0; j < chars2.length; j++) {
            if (chars1[i] === chars2[j]) {
                common.push(chars1[i]);                
            }
        }
    }
    return common.sort().join(',');
}
console.log(commonWords("hello,world", "hello,earth"));
console.log(commonWords("one,two,three", "four,five,six"));
console.log(commonWords("one,two,three", "four,five,one,two,six,three"));