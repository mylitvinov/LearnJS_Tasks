/*
Example 1:

Input: operations = ["--X","X++","X++"]
Output: 1
Explanation: The operations are performed as follows:
Initially, X = 0.
--X: X is decremented by 1, X =  0 - 1 = -1.
X++: X is incremented by 1, X = -1 + 1 =  0.
X++: X is incremented by 1, X =  0 + 1 =  1.
Example 2:

Input: operations = ["++X","++X","X++"]
Output: 3
Explanation: The operations are performed as follows:
Initially, X = 0.
++X: X is incremented by 1, X = 0 + 1 = 1.
++X: X is incremented by 1, X = 1 + 1 = 2.
X++: X is incremented by 1, X = 2 + 1 = 3.
Example 3:

Input: operations = ["X++","++X","--X","X--"]
Output: 0
Explanation: The operations are performed as follows:
Initially, X = 0.
X++: X is incremented by 1, X = 0 + 1 = 1.
++X: X is incremented by 1, X = 1 + 1 = 2.
--X: X is decremented by 1, X = 2 - 1 = 1.
X--: X is decremented by 1, X = 1 - 1 = 0.

*/

let operations1 = ["--X", "X++", "X++"];
let operations2 = ["++X", "++X", "X++"];
let operations3 = ["X++", "++X", "--X", "X--"];

const finalValueAfterOperations = (operations) => {
  return operations.reduce((res, el) => {
    el === "--X" || el === "X--" ? (res -= 1) : (res += 1);

    return res;
  }, 0);
};

console.log(finalValueAfterOperations(operations1)); // 1
console.log(finalValueAfterOperations(operations2)); // 3
console.log(finalValueAfterOperations(operations3)); // 0
