// ---------------#1--------------------

const name = "Генератор защитного поля";
let price = 1000;
console.log(` Выбран «${name}», цена за штуку ${price} кредитов`);
price = 2000;
console.log(` Выбран «${name}», цена за штуку ${price} кредитов`);

// ---------------#2--------------------

const quantity = 100;
const ordered = 50;
const answer =
  ordered <= quantity
    ? "Заказ оформлен, с вами свяжется менеджер"
    : "На складе недостаточно твоаров!";

console.log(answer);

// ---------------#3--------------------

const ADMIN_PASSWORD = "jqueryismyjam";
let message;
const userPassword = prompt("Введите пароль:");

if (userPassword == null) {
  message = "Отменено пользователем!";
} else if (userPassword === ADMIN_PASSWORD) {
  message = "Добро пожаловать!";
} else {
  message = "Доступ запрещен, неверный пароль!";
}

alert(message);

// ---------------#4--------------------

const credits = 23580;
const pricePerDroid = 3000;
let reply;
const userPurchase = prompt(
  "Количество дроидов, которые вы хотите приобрести:"
);

const totalPrice = userPurchase * pricePerDroid;
const result = totalPrice >= pricePerDroid && totalPrice <= credits;

if (userPurchase == null) {
  reply = "Отменено пользователем!";
} else if (result) {
  reply = `Вы купили ${userPurchase} дроидов, на счету осталось ${
    credits - totalPrice
  } кредитов.`;
} else {
  reply = "Недостаточно средств на счету!";
}
alert(reply);

// ---------------#5--------------------

let cost = 0;
const country = prompt("Введите название странны для доставки:");
const normalizedCountry = country.toLowerCase();

switch (normalizedCountry) {
  case "китай":
    cost = 100;
    alert(`Доставка в ${normalizedCountry} будет стоить ${cost} кредитов`);
    break;

  case "чили":
    cost = 250;
    alert(`Доставка в ${normalizedCountry} будет стоить ${cost} кредитов`);
    break;

  case "австралия":
    cost = 170;
    alert(`Доставка в ${normalizedCountry} будет стоить ${cost} кредитов`);
    break;

  case "индия":
    cost = 80;
    alert(`Доставка в ${normalizedCountry} будет стоить ${cost} кредитов`);
    break;

  case "ямайка":
    cost = 120;
    alert(`Доставка в ${normalizedCountry} будет стоить ${cost} кредитов`);
    break;

  default:
    alert("В вашей стране доставка не доступна");
}

// ---------------#6--------------------

let input;
let total = 0;

do {
  input = prompt("Введите число");
  const userInput = Number(input);
  if (!isNaN(userInput)) {
    total = total + userInput;
  }
} while (input !== null);

alert(`Общая сумма числел равна ${total}`);
