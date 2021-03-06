/*
Подсчет символов  —  полезная утилита и может пригодиться во многих сценариях. 
Она к вашим услугам, если нужно посчитать количество пробелов и впоследствии слов или
 определить число разделителей в строке. 
*/


const characterCount = (str, char) => str.split(char).length - 1

/*Суть проста. Мы разбиваем строку с помощью переданного параметра char и получаем 
длину возвращаемого массива. При каждом делении строки получается на 1 элемент больше 
значения делителя. Следовательно, вычитаем 1 и получаем однострочный скрипт characterCount. 
*/

console.log(characterCount('maxim is my name', ' ')) // 3 пробела в предложении