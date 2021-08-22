// стена крипичей,  6 рядов в каждом ряде разной длины кирпичи
let wall = [
  [1, 2, 2, 1],
  [3, 1, 2],
  [1, 3, 2],
  [2, 4],
  [3, 1, 2],
  [1, 3, 1, 1],
];

const leastBricks = (wall) => {
  let map = {}; // объект будет содержать ширину слева кирпичей, где будут стыки, в зависимости от каждого кирпича
  let max = 0; // максимальное число стыков кирпичей по 6 рядам

  wall.forEach((row) => {
    let sum = 0;
    for (let i = 0; i < row.length - 1; i++) {
      sum += row[i];
      map[sum] = map[sum] ? map[sum] + 1 : 1;
      max = Math.max(map[sum], max);
    }
    
  });
  console.log(map); // { '1': 3, '2': 1, '3': 3, '4': 4, '5': 2 }
  return wall.length - max; // 6 - 4 = 2
};

console.log(leastBricks(wall)); // 2 стены минимальное кол-во раз пересечет
