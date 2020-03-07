//Write a JavaScript exercise to get the extension of a filename.
function extension(filename) {
    console.log(filename.split('.').pop());
}
extension('index.html');
extension('hello.js');