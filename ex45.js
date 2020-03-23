/**
 * You are given a string and two markers (the initial and final). You have to find a substring enclosed between these two markers. 
 * But there are a few important conditions:
 * The initial and final markers are always different.
 * If there is no initial marker, then the first character should be considered the beginning of a string.
 * If there is no final marker, then the last character should be considered the ending of a string.
 * If the initial and final markers are missing then simply return the whole string.
 * If the final marker comes before the initial marker, then return an empty string.
 * Input: Three arguments. All of them are strings. The second and third arguments are the initial and final markers.
 * Output: A string.
 */
function betweenMarkers(text, begin, end) {
    let beginI = text.indexOf(begin);
    let beginIndex = beginI + begin.length;
    let endIndex = text.indexOf(end);
    if (beginI === -1 && endIndex === -1) {
        return text;
    }
    if (beginI === -1) {
        beginIndex = 0;
    } else if (endIndex === -1) {
        endIndex = text.length;
        return text.substring(beginIndex, endIndex);
    } else {
        if (beginI + 1 === endIndex || beginI > endIndex){
            return "";    
        }
    }    
    return text.substring(beginIndex, endIndex);
}
console.log(betweenMarkers("No [b]hi","[b]","[/b]"));
console.log(betweenMarkers("No <hi>",">","<"));
console.log(betweenMarkers("<head><title>My new site</title></head>","<title>", "</title>"));