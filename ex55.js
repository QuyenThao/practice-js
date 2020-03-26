/**
 * You are given two strings, line1 and line2. Answer, what is the smallest number of operations you need to transform line1 to line2?
Operations are:
Delete one letter from one of strings
Insert one letter into one of strings
Replace one of letters from one of strings with another letter
Input: two arguments, two strings.
Output: int, minimum number of operations.
 */
function stepsToConvert(line1, line2) {
    let h = Math.abs(line1.length - line2.length);
    let letters1 = line1.split('');
    let letters2 = line2.split('');
    let c = 0;    
    if (h === 0) {
        for (let i = 0; i < letters1.length; i++) {
            if (letters1[i] !== letters2[i]) {
                c++;
            }
        }
    }
    return h + c;
}
console.log(stepsToConvert('line1', 'line1'));
console.log(stepsToConvert('', ''));
console.log(stepsToConvert('l', ''));
console.log(stepsToConvert('line1', '1enil'));