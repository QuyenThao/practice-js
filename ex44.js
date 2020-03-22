/**
 * You are given a string and two markers (the initial one and final). You have to find a substring enclosed between these two markers. 
 * But there are a few important conditions.
 * The initial and final markers are always different.
 * The initial and final markers are always 1 char size.
 * The initial and final markers always exist in a string and go one after another.
 * Input: Three arguments. All of them are strings. The second and third arguments are the initial and final markers.
 * Output: A string.
 */
function betweenMarkers(text, begin, end) {
    let result = "";
    let chars = text.split('');
    let beginIndex = chars.findIndex(function(x) {
        return x === begin;
    });
    let endIndex = chars.findIndex(function(x) {
        return x === end;
    })
    if (beginIndex + 1 === endIndex) {
        result = "";
    } else {
        for (let i = 0; i < chars.length; i++) {
            if (i > beginIndex && i < endIndex) {
                result += chars[i];
            }
        }
    }
    return result;
}
console.log(betweenMarkers('What is >apple<', '>', '<'));
console.log(betweenMarkers('What is ><', '>', '<'));