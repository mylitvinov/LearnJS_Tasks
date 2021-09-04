/*
You are given an array items, where each items[i] = [typei, colori, namei] describes the type, color, and name of the ith item. You are also given a rule represented by two strings, ruleKey and ruleValue.

The ith item is said to match the rule if one of the following is true:

ruleKey == "type" and ruleValue == typei.
ruleKey == "color" and ruleValue == colori.
ruleKey == "name" and ruleValue == namei.
Return the number of items that match the given rule.

 

Example 1:

Input: items = [["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]], ruleKey = "color", ruleValue = "silver"
Output: 1
Explanation: There is only one item matching the given rule, which is ["computer","silver","lenovo"].
Example 2:

Input: items = [["phone","blue","pixel"],["computer","silver","phone"],["phone","gold","iphone"]], ruleKey = "type", ruleValue = "phone"
Output: 2
Explanation: There are only two items matching the given rule, which are ["phone","blue","pixel"] and ["phone","gold","iphone"]. Note that the item ["computer","silver","phone"] does not match.
*/

let items1 = [
  ["phone", "blue", "pixel"],
  ["computer", "silver", "lenovo"],
  ["phone", "gold", "iphone"],
];
let ruleKey1 = "color",
  ruleValue1 = "silver";
let items2 = [
  ["phone", "blue", "pixel"],
  ["computer", "silver", "phone"],
  ["phone", "gold", "iphone"],
];
let ruleKey2 = "type",
  ruleValue2 = "phone";

const countMatches = (items, ruleKey, ruleValue) => {
  let obj = {
    type: 0,
    color: 1,
    name: 2,
  };
  let index = obj[ruleKey];
  let res = 0;
  for (let arr of items) {
    if (arr[index] === ruleValue) res += 1;
  }
  return res;
};

console.log(countMatches(items1, ruleKey1, ruleValue1));
console.log(countMatches(items2, ruleKey2, ruleValue2));

// let countMatches = function(items, ruleKey, ruleValue) {
//   const position = ['type', 'color', 'name']
//   const keyIndex = position.findIndex(e => e === ruleKey)
//   return items.filter(arr=> arr[keyIndex] === ruleValue).length
// };
