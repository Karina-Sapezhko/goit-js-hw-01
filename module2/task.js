// ------------------------------------#1-----------------------

// const logItems = function (array) {
//   for (const element of array) {
//     console.log(`${array.indexOf(element) + 1} - ${element}`);
//   }
// };

// logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);
// logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

// ------------------------------------#2-----------------------

// const calculateEngravingPrice = function (message, pricePerWord) {
//   return message.split(" ").length * pricePerWord;
// };

// console.log(
//   calculateEngravingPrice(
//     "Proin sociis natoque et magnis parturient montes mus",
//     10
//   )
// ); // 80

// console.log(
//   calculateEngravingPrice(
//     "Proin sociis natoque et magnis parturient montes mus",
//     20
//   )
// ); // 160

// console.log(
//   calculateEngravingPrice("Donec orci lectus aliquam est magnis", 40)
// ); // 240

// console.log(
//   calculateEngravingPrice("Donec orci lectus aliquam est magnis", 20)
// ); // 120

// ------------------------------------#3-----------------------

// const findLongestWord = function (string) {
//   string = string.split(" ");
//   let longWords = string[0];
//   for (const words of string) {
//     if (words.length > longWords.length) {
//       longWords = words;
//     }
//   }
//   return longWords;
// };

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

// console.log(findLongestWord("Google do a roll")); // 'Google'

// console.log(findLongestWord("May the force be with you")); // 'force'
// ------------------------------------#4-----------------------

// const formatString = function (string) {
//   if (string.length <= 40) {
//     return string;
//   } else {
//     return string.slice(0, 40) + "...";
//   }
// };

// console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// // вернется оригинальная строка

// console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// // вернется форматированная строка

// console.log(formatString("Curabitur ligula sapien."));
// // вернется оригинальная строка

// console.log(
//   formatString(
//     "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
//   )
// );
// вернется форматированная строка

// ------------------------------------#5-----------------------

// let nameOne = "spam";
// let nameTwo = "sale";
// const checkForSpam = function (message) {
//   const arr = message.toLowerCase().split(" ");
//   for (const element of arr) {
//     if (element === nameOne || element === nameTwo) {
//       return true;
//     }
//   }
//   return false;
// };

// console.log(checkForSpam("Latest technology news")); // false

// console.log(checkForSpam("JavaScript weekly newsletter")); // false

// console.log(checkForSpam("Get best sale offers now!")); // true

// console.log(checkForSpam("[ SPAM ] How to earn fast money?")); // true

// ------------------------------------#6-----------------------

// let input;
// const numbers = [];
// let total = 0;

// do {
//   input = prompt("Введите число:");
//   if (input === null) continue;
//   input = Number(input);

//   if (isNaN(input)) {
//     alert("Было введено не число, попробуйте еще раз");
//     continue;
//   }
//   numbers.push(input);
// } while (input !== null);

// for (const number of numbers) {
//   total += number;
// }
// alert(`Общая сумма чисел равна ${total}`);

// ----------------------------------------------------------------
