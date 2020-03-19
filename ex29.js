/**Gather all capital letters in one word in the order that they appear in the text.
For example: text = "How are you? Eh, ok. Low or Lower? Ohhh.", if we collect all of the capital letters, we get the message "HELLO".
Input: A text as a string (unicode).
Output: The secret message as a string or an empty string.
 */
function findMessage(data) {
    let capitalLetters = [];
    let patt = /[^.|,|?|!| |;|_|*|&|-]/g;
    let patt1 = /[^0-9]/g;
    let data1 = data.match(patt);
    let data2 = data1.join('').match(patt1);
    for (let word of data2) {
        if (word === word.toUpperCase()) {
            capitalLetters.push(word);
        }
    }
    return capitalLetters.join('');
    
}
console.log(findMessage("How are you? Eh, ok. Low or Lower? Ohhh."));
console.log(findMessage("hello world!"));
console.log(findMessage("HELLO WORLD!!!"));
console.log(findMessage("ajhewIufwwfDnzsinfsDlheaynooQwpoiqewDjifnkbvz"));
console.log(findMessage("dnwkldhiqw3ry37xhqdxaifiuoa7eya8w6r87a7y87y&Y&*DS&*DYH*&d8w9y8whd7*&Whdukjldwj*HDJKj"));
console.log(findMessage("Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar."));