// You are given a non-empty list of integers (X). For this task, you should return a list consisting of only the non-unique elements in this list. 
 
function nonUniqueElements(data) {
    var length = data.length;
    var unique = [];
    var distinct = [];
    for (var i = 0; i < length; i++) {
        var elem = data[i];
        var uniqueInd = unique.indexOf(elem);    
        if (uniqueInd > -1) {
            unique.splice(uniqueInd, 1);
        }    if (distinct.indexOf(elem) === -1) {
            distinct.push(elem);
            unique.push(elem);
        }
    }
    for (var i = length - 1; i > -1; i--) {
        if (unique.indexOf(data[i]) > -1) {
            data.splice(i, 1);
        }
    }
    return data;
}
console.log(nonUniqueElements([1, 2, 3, 1, 3]));
console.log(nonUniqueElements([1, 2, 3, 4, 5]));
console.log(nonUniqueElements([10, 9, 10, 10, 9, 8]));