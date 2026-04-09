const now = new Date();
const output = document.getElementById("time");
const fullBtn = document.getElementById("btn green");
const dateBtn = document.getElementById("btn blue");
const timeBtn = document.getElementById("btn yellow");
let mode = "full";

function bindMode(name) {
  return function () {
    mode = name;
    update();
  };
}

fullBtn.onclick = bindMode("full");
dateBtn.onclick = bindMode("date");
timeBtn.onclick = bindMode("time");

setInterval(update, 1000);

update();

function update() {
  output.textContent = format(mode);
}

function format(formatMode) {
  const now = new Date();
  switch (formatMode) {
    case "time":
      return now.toLocaleTimeString();
    case "date":
      return now.toLocaleDateString();
    case "full":
      return now.toLocaleDateString() + " " + now.toLocaleTimeString();
    default:
      return now.toLocaleTimeString();
  }
}

// function sumNumber (arr) {
//   let sum = 0
//   for (let i = 0; i < arr.length; i++){
//     if (arr[i] % 2 === 0) {
//       sum += arr[i]
//     }
// }
// return sum
// }
// const arrNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// console.log(sumNumber(arrNumber))

// const sumEven = arr => arr.filter(num=> num % 2 === 0).reduce((sum,num) => sum + num, 0)

//   console.log(sumEven([1,2,3,4,5,6,7,8,9,10]))

// const user = {
//   name: "Vladimir",
//   age: 27,
//   hobbies: "programming ang play computer game",
// }
// function zdarova (user){
//   console.log(`Hello, my name is ${user.name}, me ${user.age}, I intresting ${user.hobbies}`)
// }

// zdarova(user)

// function isDigitsIncreasing(num) {
// const digits = String(Math.abs(num)).split('').map(Number)
//   for(let i = 0; i < digits.length; i++){
//     if(digits[i]< digits[i - 1]) {
//       return false
//     }
//   }
// return true

// }

// console.log(isDigitsIncreasing(1234))
// console.log(isDigitsIncreasing(54321))

// const arrNumber = [1, '', 2, 3, '', 5]
// const result = arrNumber.filter(item => item !== '')
// console.log(result)
// function sumNumber (num) {
//   const digits = String(Math.abs(num)).split('').map(Number);

//   for (let digit of digits){
//     if (digit % 2 === 0) {
//       return false
//     }
//   }
// return true
// }
// const arrNumber = 13578

// console.log(sumNumber(arrNumber))
// const arr = [
//   [
//     [11, 12, 13],
//     [14, 15, 16],
//     [17, 17, 19],
//   ],
//   [
//     [21, 22, 23],
//     [24, 25, 26],
//     [27, 27, 29],
//   ],
//   [
//     [31, 32, 33],
//     [34, 35, 36],
//     [37, 37, 39],
//   ],
// ];
// let sum = 0
// for(i = 0; i <arr.length; i++){
// for(j = 0; j <arr[i].length; j++){
// for(k = 0; k <arr[i][j].length; k++){
//   sum += arr[i][j][k]
// }}}
// console.log(sum)

// function secondsToDays(seconds) {
//   const secondsInDay = 24 * 60 * 60; // 86400 секунд в сутках
//   return seconds / secondsInDay;
// }

// // Примеры:
// console.log(secondsToDays(86400));  // 1
// console.log(secondsToDays(172800)); // 2
// console.log(secondsToDays(43200));  // 0.5

// function sliseStr (length, str) {
//   return str.toLowerCase().slice(0, length)
// }
// console.log(sliseStr(5, "JavaScript"))

// function numSum (num) {
//   return String(Math.abs(num)).split('').reduce((sum, digit) =>sum + Number(digit), 0)
// }

// console.log(numSum(34567))

// function daysToOrFrom(date) {
//   const d = new Date(date)
//   const now = new Date()

//   d.setFullYear(now.getFullYear())
//   const diff = d.getTime() - now.getTime()
//   const days = Math.round(diff / (1000*60*60*24))

//   if(days > 0){
//     return `До ${d.toDateString()} осталось ${days} дней(я)`
//   }else if (days < 0){
//     return `с ${d.toDateString()} прошло ${Math.abs(days)} дней(я)`
//   } else {
//     return `Сегодня ${d.toDateString()}`
//   }
// }

// console.log(daysToOrFrom('2026-02-04'));
// console.log(daysToOrFrom('2026-12-25'));
// console.log(daysToOrFrom('2026-01-01'));

// function isLeapYear (year) {
//   return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
// }
// console.log(isLeapYear(2024)); // true
// console.log(isLeapYear(2025)); // false
// console.log(isLeapYear(2000)); // true
// console.log(isLeapYear(1900)); // false

// function getLeapYearsLast100Years() {
//   const currentYear = new Date().getFullYear()
//   const startYear = currentYear - 100
//   const leapYears = []

//   for (let year = startYear; year <currentYear; year++){
//     if(isLeapYear(year)) {
//       leapYears.push(year)
//     }
//   }
//   return leapYears
// }
// function isLeapYear(year) {
//   return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
// }
// console.log(getLeapYearsLast100Years());

// function setDublication(arr) {
//   return [...new Set(arr)]
// }

// console.log(setDublication([1,1,1,2,3,5,5,5,5,3,7]))

// const promptName = prompt('Укажите ваше имя:')
// if (promptName === '' || promptName === null || promptName === undefined) {
//   alert('Имя не может быть пустым')
// }
// const promptName2 = prompt('Укажите вашу фамилию:')
// if (promptName2 === '' || promptName2 === null || promptName2 === undefined) {
//   alert('Долбаеб, введи свою фамилию')
// }

// const celsi = prompt('Сколько градусов по Цельсию')
// const farengeit =Number(celsi) * 9 / 5 +32
// alert (`${celsi} градусов по цельсию = ${farengeit} градусов по фарингейту`)

// const x = prompt('Задайте X')
// const y = ((4*x**2+18-23*x)/(5/9)*x+18*(x**3/33*x) + x * (15/12))
// alert (y)

// a = 12;
// b = 'number';
// c = false;
// d = null;
// e = undefined;
// f = 123.34;
// g = '1' + 1;
// h = 15 / 0;
// i = -'5';
// j = 5 == '5'

// at = typeof a === 'number'; // true
// bt = typeof b === 'string'; // false, а нужно чтобы все были true
// ct = typeof c === 'boolean';
// dt = typeof d === 'object';
// et = typeof e === 'undefined';
// ft = typeof f === 'number';
// gt = typeof g === 'string';
// ht = typeof h === 'number';
// it = typeof i === 'number';
// jt = typeof j === 'boolean';

// alert(at && bt && ct && dt && et && ft && gt && ht && it && jt);

// const NDS = 0.20
// const NDFL = 0.13
// const EXCISE = 0.1
// const RENT = 40000
// const FOOD = 15000
// const OTHER = 15000
// const MY_SALARY = 120000

// let ndflTax = MY_SALARY * NDFL;
// let mySalaryNet = MY_SALARY - ndflTax;
// let otherTaxes = mySalaryNet * (NDS + EXCISE);
// let totalAvailable = mySalaryNet - otherTaxes;
// totalAvailable -= FOOD + OTHER + RENT
// alert('Зарплата ' + MY_SALARY + ' рублей')
// alert('Уплачено налогов на сумму ' + (ndflTax + otherTaxes) + ' рублей')
// alert('Осталось ' + totalAvailable + ' рублей')

// const katA = Number(prompt("Катет А равен ="))
// const katB = Number(prompt("Катет Б равен ="))
// const gipatenuzaC = Number(prompt("Гипотенуза Ц равен ="))
// if(katA > katB && katA > gipatenuzaC) {
//   alert('Первая цифра самая большая')
// }else if(katB > katA && katB > gipatenuzaC) {
//   alert('Вторая цифра самая большая')
// }else if(gipatenuzaC > katA && gipatenuzaC > katB){
//   alert ('Третья цифра самая большая')
// }else{
//   alert('Иди нахер умник')
// }

// const prom = prompt("Укажите ваше число");
// if (prom % 2 === 0) {
//   alert("Ваше число четное");
// } else if (prom % 2 !== 0) {
//   alert("Ваше число нечетное");
// } else if (prom !== Number) {
//   alert("иди нахер дебил");
// }
// let sum = 0
// let input

// do {
//   input = prompt('Введите число')
//   let num = parseInt(input)
//   if(!isNaN(num)){
//     sum += num
//   }
// }while (input !== '0' && input !== null)

//   alert("Сумма введенных чисел" + sum)
//   console.log('Сумма:', sum)

// let target = 10;

// while (target <= 100) {
//     let input;
//     let num;

//     do {
//         input = prompt(`Введите ${target}`);
//         num = parseInt(input);
//     } while (isNaN(num) || num !== target);

//     console.log(`Правильно! Введено ${target}`);
//     target *= 2; // Удваиваем цель
// }

// alert("Спасибо!");
// console.log("Программа завершена");

// function countDown(n){
//   for(let i = n; i >= 1; i--){
//     console.log(i)
//   }
// }
// countDown(10)
// function repeatWord(word, count){
//   let result = []
//   for(let i = 1; i<= count; i++){
//     result.push(`${word}${i}`)
//   }
//   console.log(result.join(', '))
// }

// repeatWord('слово', 3)

// function getManth(n){
//   if(n === 1){
//     console.log('Месяц январь')
//   } else if(n===2){
//     console.log('Месяц февраль')
//   }else if(n===3){
//     console.log('Месяц март')
//   }else if(n===4){
//     console.log('Месяц апрель')
//   }else if(n===5){
//     console.log('Месяц май')
//   }else if(n===6){
//     console.log('Месяц июнь')
//   }else if(n===7){
//     console.log('Месяц июль')
//   }else if(n===8){
//     console.log('Месяц август')
//   }else if(n===9){
//     console.log('Месяц сентябрь')
//   }else if(n===10){
//     console.log('Месяц октябрь')
//   }else if(n===11){
//     console.log('Месяц ноябрь')
//   }else if(n===12){
//     console.log('Месяц декабрь')
//   }else {
//     console.log('error')
//   }
// }
// getManth(13)

// const sayHello = (name = 'Ivan',
//   surName='SHketov',
//   age=22,
//   greeting = 'Привет') =>`${greeting}, ${name} ${surName}, тебе ${age} года`
// console.log(sayHello('lev','Kotov', 24,'Здарова'))
// function mach(str1, str2) {
//   return str1.toLowerCase() === str2.toLowerCase();
// }
// console.log(mach("lox", "LOX"));

// function getSubreddit(url) {
//     const start = url.indexOf('/r/') + 3;
//     const end = url.indexOf('/', start);
//     return url.substring(start, end);
// }

// console.log(getSubreddit('https://reddit.com/r/javascript/'));     // 'javascript'
// console.log(getSubreddit('https://www.reddit.com/r/reactjs'));     // 'reactjs'
// console.log(getSubreddit('reddit.com/r/memes/comments/abc'));     // 'memes'
// console.log(getSubreddit('https://reddit.com/r/programming'));    // 'programming'
// function reverseAndNegate(arr) {
//   let result = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     result.push(-arr[i]);
//   }
//   return result;
// }
// console.log(reverseAndNegate([1, 2, 3]));     // [-3, -2, -1]
// console.log(reverseAndNegate([5, -2, 10]));   // [-10, 2, -5]
// console.log(reverseAndNegate([-1, 0, 1]));    // [-1, 0, 1]
function processArray(arr) {
  let result = [];

  // Шаг 1: изменяем числа
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      result.push(arr[i] + 4); // чётное +4
    } else {
      result.push(arr[i] - 2); // нечётное -2
    }
  }

  // Шаг 2: убираем кратные 13
  let filtered = [];
  for (let i = 0; i < result.length; i++) {
    if (result[i] % 13 !== 0) {
      filtered.push(result[i]);
    }
  }

  // Шаг 3: сумма
  let sum = 0;
  for (let num of filtered) {
    sum += num;
  }
  return sum;
}

console.log(processArray([15, 2, 3, 5, 6]));
