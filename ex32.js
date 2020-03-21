/**
 * You are given a text, which contains different english letters and punctuation symbols.You should find the most 
 * frequent letter in the text. The letter returned must be in lower case.While checking for the most wanted letter,
 * casing does not matter, so for the purpose of your search, "A" == "a". Make sure you do not count punctuation 
 * symbols, digits and whitespaces, only letters. If you have two or more letters with the same frequency, then return
 * the letter which comes first in the latin alphabet. For example -- "one" contains "o", "n", "e" only once for each, 
 * thus we choose "e".
 * Input: A text for analysis as a string.
 * Output: The most frequent letter in lower case as a string.
 */
function mostWanted(data) {
    let sortedData = data.toLowerCase().split('').sort().join('');
    let mostFrequent = [];
    let patt = /[^.|,|?|!| |;|_|*|&|-]/g;
    let patt1 = /[^0-9]/g;
    let input = sortedData.match(patt);
    let input1 = input.join('').match(patt1);
    let c = 1;
    let max, maxIndex;
    for (let i = 0; i < input1.length; i++) {
        
        if (input1[i] === input1[i - 1]) {
            c++;
        } else {
            c = 1;
        }
        mostFrequent.push(c);
    }
    if (data.length === 0) {
        max = 0;
    } else {
        max = Math.max(...mostFrequent);
    }
    maxIndex = mostFrequent.findIndex(function(x) {
        return x === max;
    });
    console.log(input1)
    return input1[maxIndex];
}

console.log(mostWanted("Hello World!"));
console.log(mostWanted("How do you do?"));
console.log(mostWanted("Lorem ipsum dolor sit amet 0000000000000000000"));
console.log(mostWanted("AAaooo!!!!"));