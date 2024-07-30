// Set
// const set = new Set();
// console.log(set);

// const set1 = new Set([1, 2, 3, 3]);
// console.log(set1);

// const uniq = (array) => [...new Set(array)];
// console.log(uniq([2, 1, 2, 3, 4, 5, 4]));

// const { size } = new Set([1, 2, 3, 3]);
// console.log(size);

// ------------------------------------------------------
// const set = new Set();
// set.add(1).add(2);
// // 메서드체이닝 가능
// console.log(set);

// Set의 요소 추가제거 ------------------------------------------------------
// const set = new Set([1, 2, 3]);
// // console.log(set.has(2));
// //  요소 가지고 있는지!
// set.clear();
// console.log(set);
// ------------------------------------------------------
// let odds = new Set([1, 3, 5, 7, 9]);
// let sum = 0;
// for (let o of odds) sum += o;
// console.log(sum);

// let product = 1;
// odds.forEach((num) => (product *= num));

// console.log(product);

// ------------------------------------------------------
// const userIDs = [101, 102, 101, 103, 102];
// const uniqueUserIds = new Set(userIDs);
// uniqueUserIds.forEach((userId) => {
//   console.log(`Id: ${userId}`);
// });
// console.log(uniqueUserIds);

// const tags = ["javaScript", "CSS", "HTML", "HTML"];
// const uniqueTags = new Set(tags);
// uniqueTags.forEach((tag) => {
//   console.log(`tag: ${tag}`);
// });

// ------------------------------------------------------
// const set = new Set([1, 2, 3]);
// console.log([...set]);
// const [a, ...rest] = set;
// console.log(a, rest);
// 주로 함수의 매개변수나 구조분해할당에서 사용. 나머지 요소들을 배열로 묶는 기능

// ------------------------------------------------------
// let set1 = new Set([1, 2, 3]);
// let set2 = new Set([4, 2, 3]);
// let union = new Set([...set1, ...set2]);
// let intersection = new Set([...set1].filter((x) => set2.has(x)));
// console.log(intersection);

// let difference = new Set([...set1].filter((x) => !set2.has(x)));
// console.log(difference);

// ------------------------------------------------------
// const set1 = new Set([..."i am a student"]);
// console.log(set1.size);
// console.log(set1);

// ------------------------------------------------------
// Map 생성자 함수는 이터러블을 인수로 받아 Map객체를 생성한다
// Map객체는 키와 값의 쌍으로 이뤄진 컬렉션
// 중복된 키를 갖는 요소가 있으면 덮어써진다.
// const map1 = new Map([
//   ["key1", "value1"],
//   ["key2", "value2"],
// ]);
// console.log(map1);

// const map2 = new Map([[1, 2]]);
// console.log(map2);

// const map = new Map([
//   ["key1", "value1"],
//   ["key1", "value2"],
// ]);
// console.log(map);

// ------------------------------------------------------
// const { size } = new Map([
//   ["key1", "value1"],
//   ["key2", "value2"],
// ]);
// console.log(size);

// const map = new Map();
// console.log(map);
// map.set("key1", "value1").set("key2", "value2");
// console.log(map);

// ------------------------------------------------------
// const map = new Map();
// const lee = { name: "Lee" };
// const kim = { name: "Kim" };
// map.set(lee, "developer").set(kim, "designer");
// // console.log()로 찍으면 늘 undefined
// console.log(map.clear());

// ------------------------------------------------------
// let map = new Map();
// map.set(0, "zero");
// map.set(1, "one");
// // Map에forEach()메서드 사용할수 있당
// // 첫번째인수는 값
// map.forEach((value, key) => console.log(key, value));

// ------------------------------------------------------
// 예제1
// let map = new Map([
//   ["국어", 85],
//   ["영어", 90],
//   ["수학", 95],
// ]);
// let sum = 0;
// let average;
// map.forEach((value) => (sum += value));
// average = sum / map.size;
// console.log("합계 : " + sum);
// console.log("평균 : " + average);

// 예제2
// let map = new Map([
//   ["title", "유럽 책방 문화 탐구"],
//   ["author", "한미화"],
//   ["price", "23000"],
// ]);
// map.forEach((value, key) => console.log(key + ": " + value));

// ------------------------------------------------------
// 예제4
// let numbers = [3, 7, 12, 3, 12, 3];
// let set = new Set([...numbers]);
// console.log(set);

// const book = new Map([
//   ["title", "유럽 책방 문화 탐구"],
//   ["author", "한미화"],
//   ["price", "23000"],
// ]);
// let text = "";
// book.forEach((value, key) => (text += key + " : " + value + "<br>"));
// document.write(text);

// let numbers = [3, 7, 12, 3, 12, 3];
// const numberSet = new Set(numbers);
// console.log(numberSet);
