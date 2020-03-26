/**
 * Here you should convert decimal numerals into roman numerals.
 * Input: string. Valid roman numeral.
 * Output: int. Decimal representation of the give numeral
 *//*
function reverseRoman(roman) {
    let items = roman.split('');
    let result = 0;
    let romanNumeral = [
        [1000, 'M'],
        [900, 'CM'],
        [500, 'D'],
        [400, 'CD'],
        [100, 'C'],
        [90, 'XC'],
        [50, 'L'],
        [40, 'XL'],
        [10, 'X'],
        [9, 'IX'],
        [5, 'V'],
        [4, 'IV'],
        [1, 'I']
    ];
    for (let i = 0; i < romanNumeral.length; i++) {
        let numberals = romanNumeral[i][0];
        let romans = romanNumeral[i][1];
        for (let j = 0; j < items.length; j++) {
            if (items[j] === romans) {
                result += numberals;
            }
        }
    }
    return result;
}
console.log(reverseRoman('MMMCMXCIX'))*/
function reverseRoman(roman) {
    let items = roman.split('');
    let roman1;
    let result = 0;
    let y = [];
    let romanNumeral1 = [
        [1000, 'M'],
        [500, 'D'],
        [100, 'C'],
        [50, 'L'],
        [10, 'X'],
        [5, 'V'],
        [1, 'I']
    ];
    let romanNumeral2 = [
        [900, 'CM'],
        [400, 'CD'],
        [90, 'XC'],
        [40, 'XL'],
        [9, 'IX'],
        [4, 'IV'],
    ];
    
    for (let i = 0; i < romanNumeral2.length; i++) {
        let numberals2 = romanNumeral2[i][0];
        let romans2 = romanNumeral2[i][1];
        for (let j = 0; j < items .length; j++) {
            let x = items[j] + items[j + 1];
            if (x === romans2) {
                result += numberals2;
                y.push(items.splice(j, 2));                
            }
        } 
    }

    for (let i = 0; i < y.length; i++) {
        let y1 = y[i].join('');
        roman1 = items.join('').split(y1);
        
    }

    for (let i = 0; i < romanNumeral1.length; i++) {
        let numberals1 = romanNumeral1[i][0];
        let romans1 = romanNumeral1[i][1];
        for (let j = 0; j < items .length; j++) {
            if (items[j] === romans1) {
                result += numberals1;
            }
        }
    }
    return result;
}
console.log(reverseRoman('MMMCMXCIX'));
console.log(reverseRoman("MMMLXXII"));
console.log(reverseRoman("XVI"));