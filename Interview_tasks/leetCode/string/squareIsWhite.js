/*
The coordinate will always represent a valid chessboard square. The coordinate will always have the letter first, and the number second.

 Example 1:

Input: coordinates = "a1"
Output: false
Explanation: From the chessboard above, the square with coordinates "a1" is black, so return false.
Example 2:

Input: coordinates = "h3"
Output: true
Explanation: From the chessboard above, the square with coordinates "h3" is white, so return true.
Example 3:

Input: coordinates = "c7"
Output: false
*/

const squareIsWhite = function(coordinates) {
  return ((coordinates[0].charCodeAt(0) - 'a'.charCodeAt(0)) + +coordinates[1]) % 2 == 0;
};