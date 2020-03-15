// Write a JavaScript program to create the value of NOR of two given booleans.
// Note: In boolean logic, logical nor or joint denial is a truth-functional operator which produces a result that is the negation of logical or.
//That is, a sentence of the form (p NOR q) is true precisely when neither p nor q is true - i.e. when both of p and q are false

function logical_Nor(a, b) {
    if (a != b) {
        return false;
    } else {
        return true;
    }
} 
console.log(logical_Nor(false, false));
console.log(logical_Nor(false, true));