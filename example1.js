// //예제 1
// const numbers = [20, 37, -21, 32, -2];
// document.write(numbers[1] + ",");
// document.write(numbers[3]);

// //예제 2
// const scores = [67, 82, 97, 100, 92]
// for(let i = 0; i<scores.length; i++){
//     document.write(scores[i] + "<br>" )
// }

// for(let score of scores){
//     document.write(score + '<br>');
// }

// //예제 3
// const tel = ["010", "1234", "5678"];
// let tel2 = tel.join("-");
// document.write(tel2);

// //예제 4
// const colors = ["빨강", "노랑", "파랑", "주황"];
// let arr = colors.shift();
// document.write(colors + "/");
// document.write(arr);

// //예제 5
// const colors2 = ["빨강", "노랑", "파랑", "주황"];
// colors2.splice(0, 2, "검정");
// document.write(colors + "/");

// colors2.splice(2, 0, "하얀");
// document.write(colors + "/");

// colors.splice(1, 2);
// document.write(colors);

// //예제 6
// let mathScores = [90, 85, 70, 86, 97];
// let sum = 0;
// let average;
// for (let mathscore of mathScores){
//     sum += mathscore;
// }
// average = sum / mathScores.length;
// let text = "";
// text += "합계: "+ sum + "<br>";
// text += "평균: "+ average +"<br>";
// document.write(text);

// //예제 7
// const tempNumbers = [7,  -24, -8, 10, 17, -18];
// tempFind = tempNumbers.find(number => number < 0);
// document.write(tempFind);

// //예제8
// let arr1 = ["빨강", "노랑", "주황", "파랑"];
// let arr2 = [];

// for(let i=0; i<4; i++){
//     arr2[i] = arr1.pop();
// }
// document.write(arr2);

// //예제9
// let a = [12, 0, 2, 5, 4];
// let b = [0, 2, 3, 12, 8];

// let c = [];
// b.forEach(element => {
//     if(a.includes(element)){
//         c.push(element);
//     }
// });
// document.write(c);

// //예제 10
// const numbers2 = [1, 3, 5];
// let numbers2Array = numbers2.map(num => num * 10);
// document.write(numbers2Array);

// //set, map 예제1
// const set1 = new Set("I am a student");
// document.write(set1.size);

// //예제2
// const scores = new Map([["국어", 85], ["영어", 90], ["수학", 95]]);
// let sum = 0;
// let average;
// scores.forEach(function(value){
//     sum += value;
// })
// average = sum / scores.size;
// console.log(sum);
// console.log(average);

// //set, map 예제3
// const book = new Map([["title", "유럽 책방 문화 탐구"],["author", "한미화"],["price", "23000"]]);
// let text = "";
// book.forEach(function(value, key){
//     text += key + ":" + value + "<br>";
// })
// document.write(text);

// //set, map 예제4
// let numbers = [3, 7, 12, 3, 12, 3]
// const numbers_i = new Set(numbers);
// console.log(numbers_i);
