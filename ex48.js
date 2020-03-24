/**
 * Do you remember the radix and Numeral systems from math class? Let's practice with it.
 * You are given a positive number as a string along with the radix for it. Your function should convert it into decimal form.
 * The radix is less than 37 and greater than 1. The task uses digits and the letters A-Z for the strings.
 * Watch out for cases when the number cannot be converted. For example: "1A" cannot be converted with radix 9. 
 * For these cases your function should return -1.
 * Input: Two arguments. A number as string and a radix as an integer.
 * Output: The converted number as an integer.
 * numberRadix("AF", 16) == 175
 * numberRadix("101", 2) == 5
 * numberRadix("101", 5) == 26
 * numberRadix("Z", 36) == 35
 * numberRadix("AB", 10) == -1 */
function numberRadix(str_number, radix){
    let convert, convertArr = [];
    let result = parseInt(str_number, radix);
    for (let i = 0; i < str_number.length; i++) {
        convert = parseInt(str_number[i], radix);
        convertArr.push(convert);        
    }
    for (let i = 0; i < convertArr.length; i++) {
        if (isNaN(convertArr[i]) === true) {
            return -1;
        } 
    }
    if (isNaN(convert === true) || isNaN(result) === true) {
        return -1;
    } else {
        return result;
    }  
    
}
console.log(numberRadix("AF", 16));
console.log(numberRadix("101", 2));
console.log(numberRadix("ASD",15));
console.log(numberRadix("Z", 36));
console.log(numberRadix("AB", 10));