// 배열

/*

--------------------------------------------------------------------

const arr1 = new Array(); // 빈 배열 생성
const arr2 = []; // 빈 배열 생성
const arr3 = [1, 2, 3, 4, 5];
const arr4 = new Array(5);
console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(arr4);
const arr5 = new Array(5).fill(5);
console.log(arr5);

const arr6 = Array.from(Array(5), function (value, idx) {
  return idx + 1;
});
console.log(arr6);

--------------------------------------------------------------------
const arr = [1, 2, 3];
const arr2 = [4, 5, 6];
// join
console.log(arr.join(", "));

// reverse
// 원래 배열도 변함.
// console.log(arr.reverse());
console.log(arr);

// concat
console.log(arr.concat(arr2));


// --------------------------------------------------------------------

// push()
// pop()
// 배열 끝 요소
const arr = [1, 2, 3, 4, 5, 6];
arr.push(7);
arr.push(7, 8, 9);

console.log(arr);

arr.pop();
console.log(arr);
arr.pop();
console.log(arr);
console.log(arr.pop());
console.log(arr);

// shift(), unshift()
// 배열 첫 요소
arr.shift(); // 첫 요소인 1 삭제됨
arr.shift(); // 그다음 첫요소인 2 삭제
console.log(arr);



// --------------------------------------------------------------------
const arr = [1, 2, 3, 4, 5, 6];

// slice
// 배열[2]부터 배열[4]전까지 잘라오기
// 원본배열은 안 바뀜.
console.log(arr.slice(2, 4));
console.log(arr);

// splice
// 배열[2] 부터 2개 잘라버리깅
// 원본배열 바뀜
arr.splice(2, 2);
console.log(arr);

*/

// --------------------------------------------------------------------

const arr = [1, 2, 3, 4, 5, 6];

// for of
for (const item of arr) {
  console.log(item);
}

// 배열은 사실 객체ㅐ와 타입이 동일 -  객체처럼 사용가능
console.log(typeof arr);
arr["key"] = "value";
console.log(arr);
console.log(arr.length);
// 키, value가  추가 됐음에도 length는 달라지지 않음.
// 자바스크립트에서 배열이 특수한 객체이기 때문
