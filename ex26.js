/**
 * you should find the length of the longest substring that consists of the same letter. 
 * For example, line "aaabbcaaaa" contains four substrings with the same letters "aaa", "bb","c" and "aaaa". 
 * The last substring is the longest one which makes it an answer.
 */
function longRepeat(line) {
    let repeats = [];
    let c = 1;
    for (let i = 0; i < line.length; i++) {
        if (line[i] === line [i - 1]) {
            c++;
        } else {
            c =1;
        }
        repeats.push(c);
    }
    if (line.length === 0) {
        return 0;
    } else {
        return Math.max(...repeats);
    }
}
console.log(longRepeat('sdsffffse'));
console.log(longRepeat(''));
console.log(longRepeat('aa'));
