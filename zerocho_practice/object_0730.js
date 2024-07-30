// 객체끼리는 비교하면 false 나옴,( 배열도 함수도,)
//  {} === {}   => false (객체 입력한 순간 새로운 객체가 생성된거라서)

const a = {
  name: {
    first: "k",
    last: "name",
  },
  gender: "m",
};
console.log(a.name.first);
// 객체 리터럴

// 변수 안에 넣어놓고 비교해야 true나옴
// 하나의 객체를 비교한거니까 같음.

const array = [1, 2, a];
// 배열 리터럴

console.log(a === array[2]);
// true

// console.log(array === [1, 2, a]);
// false
// JavaScript는 값이 아닌 참조로 개체를 비교하므로 이 조건은 항상 'false'을(를) 반환합니다.
// "객체"인 경우에는 변수에는 주소가 저장되어있고

// 객체가 아닌 경우, 일반값인 경우에는 그 값이 저장되어있다고 볼 수 있음

// 참조 와 복사
const arrA = { name: "zerocho" };
const arrB = arrA;
// 두 변수 모두 같은 객체를 저장하고 있는것임. 이러한 상황일때, arrA와 arrB, 그리고 객체 간에 참조관계가 있다고 표현함.
arrA.name = "hero";
console.log(arrB.name);

// 객체가 아닌거.
let c = 12;
let d = c;
c = 0;
console.log(c);
console.log(d);
