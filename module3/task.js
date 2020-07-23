// -------------------------------------------#1----------------------------

// const user = {
//   name: "Mango",
//   age: 20,
//   hobby: "html",
//   premium: true,
// };
// user.mood = "heppy";
// user.hobby = "skydiving";
// user.premium = false;

// const keys = Object.keys(user);
// for (const key of keys) {
//   console.log(key, ":", user[key]);
// }

// -------------------------------------------#2----------------------------

// const countProps = function (obj) {
//   return Object.entries(obj).length;
// };

// console.log(countProps({})); // 0

// console.log(countProps({ name: "Mango", age: 2 })); // 2

// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })); // 3

// -------------------------------------------#3----------------------------

// const findBestEmployee = function (employees) {
//   const tasks = Object.values(employees);

//   for (const key in employees) {
//     if (employees[key] === Math.max(...tasks)) {
//       return key;
//     }
//   }
// };

// console.log(
//   findBestEmployee({
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99,
//   })
// ); // lorence

// console.log(
//   findBestEmployee({
//     poly: 12,
//     mango: 17,
//     ajax: 4,
//   })
// ); // mango

// console.log(
//   findBestEmployee({
//     lux: 147,
//     david: 21,
//     kiwi: 19,
//     chelsy: 38,
//   })
// ); // lux

// -------------------------------------------#4----------------------------

// const countTotalSalary = function (employees) {
//   let total = 0;
//   for (const key in employees) {
//     total = total + employees[key];
//   }
//   return total;
// };

// console.log(countTotalSalary({})); // 0

// console.log(
//   countTotalSalary({
//     mango: 100,
//     poly: 150,
//     alfred: 80,
//   })
// ); // 330

// console.log(
//   countTotalSalary({
//     kiwi: 200,
//     lux: 50,
//     chelsy: 150,
//   })
// ); // 400

// -------------------------------------------#5----------------------------

// const products = [
//   { name: "Радар", price: 1300, quantity: 4 },
//   { name: "Сканер", price: 2700, quantity: 3 },
//   { name: "Дроид", price: 400, quantity: 7 },
//   { name: "Захват", price: 1200, quantity: 2 },
// ];

// const getAllPropValues = function (arr, prop) {
//   let allValues = [];

//   for (const object of arr) {
//     if (prop in object) {
//       allValues.push(object[prop]);
//     }
//   }
//   return allValues;
// };

// console.log(getAllPropValues(products, "name")); // ['Радар', 'Сканер', 'Дроид', 'Захват']

// console.log(getAllPropValues(products, "quantity")); // [4, 3, 7, 2]

// console.log(getAllPropValues(products, "category")); // []

// // -------------------------------------------#6----------------------------

// const products = [
//   { name: "Радар", price: 1300, quantity: 4 },
//   { name: "Сканер", price: 2700, quantity: 3 },
//   { name: "Дроид", price: 400, quantity: 7 },
//   { name: "Захват", price: 1200, quantity: 2 },
// ];

// const calculateTotalPrice = function (allProdcuts, productName) {
//   for (let prodcut of allProdcuts) {
//     if (prodcut.name === productName) {
//       return prodcut.price * prodcut.quantity;
//     }
//   }
// };

// console.log(calculateTotalPrice(products, "Радар")); // 5200

// console.log(calculateTotalPrice(products, "Дроид")); // 2800

// -------------------------------------------#7----------------------------
