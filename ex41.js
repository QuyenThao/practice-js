/**
 * You are given a string with words and numbers separated by whitespaces (one space). The words contains only letters. 
 * You should check if the string contains three words in succession. For example, the string "start 5 one two three 7 end" 
 * contains three words in succession.
 * Input: A string with words.
 * Output: The answer as a boolean.
 */
function threeWords(data) {
    let patt = /[0-9]/g;
    let words = data.split(patt);
    let input = [];
    let input1, input2 = [];
    let input3 = [];
    let length, length1= [];
    if (data.split(' ').length < 3) {
        return false;
    } else {
        for (let i = 0; i < words.length; i++) {
            if (words[i] !== '') {
                input.push(words[i])
            }
        }
        for (let j = 0; j < input.length; j++) {
            input1 = input[j].split(' ');
            input2 = []; 
            for (let h = 0; h < input1.length; h++) { 
                              
                if (input1[h] !== '') {
                    input2.push(input1[h]);
                }
            } 
            input3.push(input2);      
        } 
        for (let i = 0; i < input3.length; i++) {
            length = [];
            if(input3[i].length>= 3) {
                length.push(input3[i].length);
            }
            if (length.length !== 0) {
                length1.push(length);
            } 
        }  
        if (length1 >= 1) {
            return true;
        } else {
            return false;
        }
    }
    
    
    
    
}

console.log(threeWords("Hello World hello"));
console.log(threeWords("Hi"));
console.log(threeWords("one two 3 four five 6 seven eight 9 ten eleven 12"));
console.log(threeWords("one two 3 four five six 7 eight 9 ten eleven 12"));
console.log(threeWords("1 2 3"));