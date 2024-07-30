// const me = [1, 2, 3, 4, 5];
// console.log(me);
//  Array.isArray(me)
// typeof me

let carSales = [
  300, 350, 400, 450, 500, 600, 650, 620, 580, 620, 580, 620, 500, 450,
];
// console.log(carSales);
// let carSales2 = new Array(
//   300,
//   350,
//   400,
//   450,
//   500,
//   600,
//   650,
//   620,
//   580,
//   620,
//   580,
//   620,
//   500,
//   450
// );

// console.log(carSales2);

// let copy = Array.from(carSales);

// let concat = [0, carSales, 100, 200];
// console.log(concat);

// let numbers = [..."abcdefg"];
// console.log(numbers);

// let may = carSales[4];
// carSales[4] = 680;
// console.log(carSales[4]);
// let june = carSales["5"];
// console.log(june);

// carSales[12] = -50;
// console.log(carSales);

// let a = [1, 2, 3, 4, 5];
// let len = a.length;
// a.length = 0;
// console.log(a);

// let jan, fab, mar, rest;
// [jan, fab, mar, ...rest] = carSales;
// console.log(jan, fab, mar);
// console.log(rest);

//  for...of 문

// toFixed(소수점자리수)
// let sum = 0;
// for (let sale of carSales) sum += sale;
// let average = sum / carSales.length;
// let roundedAverage = average.toFixed(2);
// console.log(average);
// console.log(roundedAverage);

// .entries()

// let sum = 0;
// for (let [index, sale] of carSales.entries()) {
//   if (index % 2 === 0) {
//     sum += sale;
//   }
// }
// let average = sum / (carSales.length / 2);
// console.log(average);

// for..of와 for...in의 차이
// for...of는 키의 목록을 반환
// let list = [4, 5, 6];
// for (let i in list) {
//   console.log(i);
// }
// for (let i of list) {
//   console.log(i);
// }

// iterable 객체
// car는 이터러블객체아님
// for..of못씀
// const car = {
//   maker: "BMW",
//   color: "red",
//   year: "2012",
// };
// for (let prop of car) {
//   console.log(prop);
// }

// let sum = 0;
// carSales.forEach((sale) => {
//   sum += sale;
// });
// let average = sum / carSales.length;
// console.log(average);

// carSales.forEach((sale, index, array) => {
//   array[index] = sale + 50;
// });
// console.log(carSales);

// let newCarSales = carSales.map((sale) => sale + 50);
// console.log(newCarSales);
// console.log(carSales);

// let highSales = carSales.filter((sale) => sale > 500);
// console.log(highSales);

// 짝수월 판매량만 보기 - index는 0부터시작
// let evenSales = carSales.filter((sale, index) => index % 2 === 1);
// console.log(evenSales);

// let firstSaleSix = carSales.find((sale) => sale > 600);
// console.log(firstSaleSix);

// // 600이상인값 중 첫번쨰로 만난거의 인덱스값
// let firstSaleSixIndex = carSales.findIndex((sale) => sale > 600);
// console.log(firstSaleSixIndex);

// let allSaleSix = carSales.every((sale) => sale > 600);
// console.log(allSaleSix);
// //  배열의 모든요소에 대해 연산 확인, 600 이상아닌거도 있어서 false뜸

// let anysaleSix = carSales.some((sale) => sale > 600);
// console.log(anysaleSix);
// // some은 조건에 대해 하나라도 있으면 true 반환

// reduce() ------------------------------------------------------------
// mdn에서 보기
// let sum = carSales.reduce((t1, t2) => t1 + t2, 0);
// console.log(sum);
// let average = sum / carSales.length;
// console.log(average);

// let highest = carSales.reduce((t1, t2) => (t1 > t2 ? t1 : t2));
// console.log(highest);

// flat() ---------------------------------------------------------------------
// let flat = [1, [2, 3]].flat();
// console.log(flat);

// let message = ["오늘은", "해가 쨍쨍!"];
// let words = message.flatMap((msg) => msg.split(""));
// 평탄화해서 하나씩
// console.log(words);

// const array1 = ["a", "b", "c"];
// const array2 = ["d", "e", "f"];
// const array3 = array1.concat(array2);
// console.log(array3);

// let original = [1, 2, 3];
// let newArray;
// newArray = original.concat(4, 5);
// newArray = original.concat([4, 5], [6, 7]);
// console.log(newArray);

// let stack = [];
// stack.push(1);
// stack.push(2, 3);
// stack.pop(3);
// stack.unshift(1);
// stack.unshift(2, 3);
// stack.shift();
// console.log(stack);

// const numbers = [20, 37, -21, 32, -2];
// const numThirty = numbers.filter((num) => num > 30);
// document.write(numThirty);
// document.write(numbers[1] + ",");
// document.write(numbers[3]);

// let a = [1, 2, 3, 4, 5];

// a.splice(0, 2);
// a.splice(2);
// 하나만쓰면 2요소부터 다 짤림
// a.splice(0, 2, 10, 20);

// let b = a.slice(0, 2);
// let c = a.slice(1, -1);
// console.log(a);
// console.log(b);
// console.log(c);

// let a = new Array(5);
// a.fill(0);
// // a.fill(1, 1);
// a.fill(1, 1, -1);
// console.log(a);

// let a = [0, 1, 2, 3, 2, 1, 0];
// let b = a.indexOf(2);
// let c = a.lastIndexOf(2);
// let d = a.indexOf(5);
// console.log(d);

// includes()
// let a = [0, true, 2, false, NaN];
// let b = a.includes(NaN);
// console.log(b);

// let a = ["apple", "cherry", "banana"];
// let b = a.sort();
// // 알파벳 순으로 정렬해줌
// console.log(b);

// let c = [22, 333, 121];
// let d = c.sort();
// console.log(d);
// // 앞의 숫자만 보고 문자처럼 정렬함
// let e = c.sort((a, b) => a - b);
// console.log(e);

// let a = [1, 2, 3];
// let b = a.join();
// let c = a.join("");
// console.log(b);
// console.log(c);

let scores = [67, 82, 97, 100, 92];
// // for
// for (let i = 0; scores.length > i; i++) {
//   // console.log(scores[i]);
//   // document.write(scores[i] + ", ");
// }
// // for...of
// for (let num of scores) {
//   // console.log(num);
//   document.write(num + "<br>");
// }

// const tel = ["010", "1234", "5678"];
// const tel2 = tel.join("-");
// document.write(tel2);
// console.log(tel2);

// const colors = ["빨강", "노랑", "파랑", "주황"];
// let arr = colors.shift();
// console.log(arr);
// console.log(colors + "/" + arr);

// let arr = new Array(2);
// for (let i = 0; i < arr.length; i++) {
//   arr[i] = new Array(3);
// }
// console.log(arr);

// let arr = Array.from(new Array(2), () => new Array(3));
// console.log(arr);
// arr[0][0] = 1;
// arr[0][1] = 2;
// arr[0][2] = 3;
// arr[1][0] = 4;
// arr[1][1] = 5;
// arr[1][2] = 6;
// console.table(arr);

// for (let i = 0; i < arr.length; ++i) {
//   for (let j = 0; j < arr[j].length; ++j) {
//     console.log(arr[i][j]);
//   }
// }

// 다차원배열 ===------------------------------------------배열 꼭-복습하깅
// let score = [
//   [83, 90, 70, 87],
//   [87, 93, 62, 83],
//   [98, 90, 77, 97],
// ];
// let sum, average;
// let text = "";
// // 합계 평균
// for (let i = 0; i < score.length; i++) {
//   sum = 0;
//   for (let j = 0; j < 4; j++) {
//     sum += score[i][j];
//   }
//   average = sum / 4;
//   text += i + 1 + "번째 학생의 합계: " + sum + ", 평균: " + average + "<br>";
// }
// document.write(text);

// let mathScores = [90, 85, 70, 86, 97];
// let sum = 0;
// let average;
// for (let score of mathScores) {
//   sum += score;
// }
// average = sum / mathScores.length;
// let text = "합계:" + sum + ", 평균:" + average;
// document.write(text);
// console.log(sum);
// console.log(average);

// let tempNumbers = [7, -24, -8, 10, 17, -18];
// arr = tempNumbers.find((el) => el < 0);
// document.write(arr);

// 9번=-=====--------------------------
// let a = [12, 0, 2, 5, 4];
// let b = [0, 2, 3, 12, 8];
// arr = b.filter((el) => a.includes(el));
// document.write(arr);

// 10번=-=====--------------------------
const numbers2 = [1, 3, 5];
num3 = numbers2.map((num) => num * 10);

document.write(num3);
