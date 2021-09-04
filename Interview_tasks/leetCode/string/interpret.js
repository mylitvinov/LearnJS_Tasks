/*
You own a Goal Parser that can interpret a string command. The command consists of an alphabet of "G", "()" and/or "(al)" in some order. The Goal Parser will interpret "G" as the string "G", "()" as the string "o", and "(al)" as the string "al". The interpreted strings are then concatenated in the original order.

Given the string command, return the Goal Parser's interpretation of command.

 

Example 1:

Input: command = "G()(al)"
Output: "Goal"
Explanation: The Goal Parser interprets the command as follows:
G -> G
() -> o
(al) -> al
The final concatenated result is "Goal".
Example 2:

Input: command = "G()()()()(al)"
Output: "Gooooal"
Example 3:

Input: command = "(al)G(al)()()G"
Output: "alGalooG"
*/
let command1 = "G()(al)"
let command2 = "G()()()()(al)"
let command3 = "(al)G(al)()()G"

const interpret = (command) => {
let re1 = /\(al\)/gi;
let newstr = command.replace(re1, 'al');
let re2 = /\(\)/g
let res =  newstr.replace(re2,'o')

 return res
}

// let interpret = (command) => command.replace(/\(\)/g,"o").replace(/\(\al\)/g,"al")

console.log(interpret(command1)) //Goal
console.log(interpret(command2)) // Gooooal
console.log(interpret(command3)) // alGalooG

// const test = function (command) {
//   return command.split("()").join("o").split("(al)").join("al");
//   };