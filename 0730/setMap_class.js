// const set = new Set();
// console.log(set);

// const set1 = new Set([1, 2, 3, 3]);
// console.log(set1);

// // Set 객체는 Set 생성자 함수로 생성한다.
// const uniq = array => [...new Set(array)];
// console.log(uniq([1, 2, 3, 2, 1, 5, 4, 3, 2]));

// //Set 객체의 요소 개수는 size로 확인한다.
// // const {size} = new Set([1, 2, 3, 3]);
// console.log(size);

// //요소 추가할 때 add 사용
// const set2 = new Set();
// set2.add(1).add(4);
// console.log(set2);

// //특정 요소가 존재하는지 확인하려면 has() 메서드 사용
// console.log(set2.has(3));
// set2.clear();
// console.log(set2);

// // for ... of문과 forEach()메서드 사용하여 포함된 값을 순회할 수 있다.
// set2.forEach((v, v2, set2) => console.log(v, v2, set2));

// let odds = new Set([1, 3, 5, 7, 9]);
// let sum = 0;
// for(let o of odds)
//     sum += o;
// console.log(sum);

// let product = 1;
// odds.forEach(o => product *= o);
// console.log(product);

// const userIDs = [101, 102, 101, 103, 102];
// const uniqueUserIDs = new Set(userIDs);
// uniqueUserIDs.forEach(userID => {
//     console.log(`ID: ${userID}`);
// });

// const tags = ['JavaScript', 'CSS', 'HTML', 'HTML'];
// const uniqueTags = new Set(tags);
// uniqueTags.forEach(tag => {
//     console.log(`tag: ${tag}`);
// });

// //Set 객체는 합집합, 교집합, 차집합 개념을 가질 수 있다.
// let set1 = new Set([1, 2, 3]);
// let set2 = new Set([4, 3, 2]);
// let union = new Set([...set1, ...set2]);
// let intersection = new Set([...set1].filter(x => set2.has(x)));
// console.log(intersection);
// let difference = new Set([...set1].filter(x => !set2.has(x)));
// console.log(difference);

// // Map
// const map = new Map([['key1', 'value1'],['key2', 'value2']]);
// console.log(map);
// const map2 = new Map([1, 2]);
// // const map2 = new Map([[1, 2]]);
// console.log(map2);

// //요소 개수 확인은 size프로퍼티 이용
// const {size} = new Map([['key1', 'value1'],['key2', 'value2']]);
// console.log(size);

// 요소를 추가할 때는 .set() 메서드 사용, 호출한 후 연속적으로 호출
// const map2 = new Map();
// console.log(map2);
// map2.set('key1', 'value1').set('key2', 'value2');
// console.log(map2);

// // 키 타입에 제한이 없다.
// const map3 = new Map();
// const lee = {name: 'Lee'};
// const Kim = {name: 'Kim'};
// map3.set(lee, 'developer').set(Kim, 'designer');
// console.log(map3.delete(Kim));
// console.log(map3.has(Kim));
// map3.clear();
// console.log(map3);

//forEach() 메서드 사용
let map = new Map();
map.set(0, "zero");
map.set(1, "one");
map.forEach((value, key) => console.log(key, value));
