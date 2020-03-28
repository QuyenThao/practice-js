/**
 * You are given an expression with numbers, brackets and operators. For this task only the brackets matter. 
 * Brackets come in three flavors: "{}" "()" or "[]". Brackets are used to determine scope or to restrict some expression. 
 * If a bracket is open, then it must be closed with a closing bracket of the same type. The scope of a bracket must not 
 * intersected by another bracket. In this task you should make a decision, whether to correct an expression or not based
 *  on the brackets. Do not worry about operators and operands.
 * Input: An expression with different of types brackets as a string (unicode).
 * Output: A verdict on the correctness of the expression in boolean (True or False).
 */
function brackets(expression){
    let express1 = expression.match(/\W/g);
    if (express1 === null) {
        return true;
    }
    let express = express1.join('').match(/[^-|+|*|/]/g);
    let stack = [];
    let brackets = {
        '(' : ')',
        '{' : '}',
        '[' : ']'
    }
    if (express === null) {
        return true;
    } else if (express.length % 2 === 1) {
        return false;
    } else {
        for (let  i = 0; i < express.length; i++) {
            if (express[i] === '(' || express[i] === '{' || express[i] === '[') {
                stack.push(express[i]);
            } else {
                let l = stack.pop();
                if (express[i] != brackets[l]) {
                    return false;
                }
            }
        }
        return true;
    }
}
console.log(brackets("1"));
console.log(brackets("{[(3+1)+2]+}"));
console.log(brackets("(3+{1-1)}"));
console.log(brackets("[1+1]+(2*2)-{3/3}"));
console.log(brackets("(({[(((1)-2)+3)-3]/3}-3)"));
console.log(brackets("2+3"));