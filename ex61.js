/**
 * Your mission is to convert the name of a function (a string) from the Python format (for example "my_function_name") 
 * into CamelCase ("MyFunctionName"), where the first char of every word is in uppercase and all words are concatenated 
 * without any intervening characters.
 * Input: A function name as a string.
 * Output: The same string, but in CamelCase.
 */
function toCamelCase(name) {
   let splitStr = name.toLowerCase().split('_');
   for (var i = 0; i < splitStr.length; i++ ) {
       splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
   }
   return splitStr.join('');
}
console.log(toCamelCase("my_function_name"), "MyFunctionName")
console.log(toCamelCase("i_phone"), "IPhone")
console.log(toCamelCase("this_function_is_empty"), "ThisFunctionIsEmpty")
console.log(toCamelCase("name"), "Name")