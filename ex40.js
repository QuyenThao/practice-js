/**
 * You have a sequence of strings, and you’d like to determine the most frequently occurring string in the sequence. It can be only one.
 * Input: non empty Array of strings.
 * Output: a string.
 */
function mostFrequent(data) {
    let sortedData = data.sort();
    let mostFrequent = [];
    let c = 1;
    let max, maxIndex;
    for (let i = 0; i < sortedData.length; i++) {        
        if (sortedData[i] === sortedData[i - 1]) {
            c++;
        } else {
            c = 1;
        }
        mostFrequent.push(c);
    }
    if (sortedData.length === 0) {
        max = 0;
    } else {
        max = Math.max(...mostFrequent);
    }
    maxIndex = mostFrequent.findIndex(function(x) {
        return x === max;
    });
    return sortedData[maxIndex];
}
console.log(mostFrequent([
    'a', 'b', 'c', 
    'a', 'b',
    'a'
]))