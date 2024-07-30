// //배열의 각 요소에서 값을 풀어서 한번에 여러 변수에 저장하는 구조 해체 대입

// let carSales = [300, 350, 400, 450, 500, 600, 650, 620, 580, 620, 580, 620, 500, 450]
// let jan, fab, mar, rest;
// [jan, fab, mar, ...rest] = carSales;

// //for... of 문을 사용하여 배열에서 요소를 하나씩 가져오기
// let sum = 0;
// for(let sale of carSales)
//     sum += sale;
// let average = sum / carSales.length;
// let roundedAverage = average.toFixed(2);

// //for ... of문과 entries() 메서드를 사용하여 배열에서 인덱스와 배열 요소 값을 한꺼번에 하나씩 가져올 수 있다.
// let sum = 0;
// for(let [index, sale] of carSales.entries()){
//     if(index % 2 == 0)
//         sum += sale; 
// }
// let average = sum / (carSales.length / 2);

// //for of 와 for in의 차이
// let list = [4, 5, 6];
// for(let i in list) {
//     console.log(i);
// }
// for(let i of list){
//     console.log(i);
// }

const car = {
    maker: "BMW",
    color: "red",
    year: "2012",
};
for (let prop in car){
    console.log(prop);
}


// // 배열 메서드 forEach()
// let sum = 0;
// carSales.forEach(sale => {sum += sale;});
// let average = sum / carSales.length;

// carSales.forEach((sale, index, array) => {array[index] = sale + 50});

// // 메서드 map() / forEach()와 비교
// let newCarSales = carSales.map(sale => sale + 50);

// //메서드 filter()
// let highSales = carSales.filter(sale => sale > 500) ;

// let evenSales = carSales.filter((sale, index) => index % 2 == 1);

// //find(), findIndex() 처음 찾은 요소와 처음 찾은 요소의 인덱스
// let firstSaleSix = carSales.find(sale => sale > 600);
// let firstSaleSixIndex = carSales.findIndex(sale => sale > 600);

// //every() 모든 배열 요소에 대한 조건연산에서의 결과 반환(true, false), 
// //some() 모든 배열 요소에서 하나라도 참 또는 거짓을 반환하는 경우 결과 반환(true, false)

// let allSaleSix = carSales.every(sale => sale > 600);
// let anySaleSix = carSales.some(sale => sale > 600);


// //reduce() 메서드는 배열의 각 요소에 대해 주어진 리듀서 함수를 실행하고 하나의 결과값 반환
// let sum = carSales.reduce((t1, t2) => t1 + t2, 0);
// let average = sum / carSales.length;

// let highest = carSales.reduce((t1, t2) => (t1 > t2 ? t1: t2));

// //flat() 배열 요소에 다른 배열을 포함하고 있을 때 풀어준다.
// let flat = [1, [2, 3]].flat();


// //flatMap() 
// let message = ["오늘 날씨가", "좋습니다."]
// let words = message.flatMap(msg => msg.split(""));


// //map() + flat()
// let message = ["오늘 날씨가", "좋습니다."]
// let map = message.map(msg => msg.split(""));
// let words = map.flat();
// console.log(words);

// //concat() 두 개 이상의 배열을 병합하는 데 사용됩니다. 이 메서드는 기존 배열을 변경하지 않고, 새 배열을 반환
// const array1 = ['a', 'b', 'c'];
// const array2 = ['d', 'e', 'f'];
// const array3 = array1.concat(array2);

// let original = [1, 2, 3];
// let newArray;
// newArray = original.concat(4, 5);
// newArray = original.concat([4, 5], [6, 7]);
// console.log(original);
// console.log(newArray);

// //push() 배열의 끝에 요소를 추가, pop() 배열 끝에 있는 요소를 꺼내와 반환하고 해당 요소를 배열에서 삭제
// let stack = [];
// stack.push(1);
// stack.push(2, 3);
// stack.pop();
// console.log(stack);
// stack.push(4);

// //unshift() 배열의 처음에 요소를 추가, shift() 배열의 처음에 있는 요소를 꺼내와 삭제
// let stack = [];
// stack.unshift(1);
// stack.unshift(2, 3);
// stack.shift();


// //slice() 배열을 잘라서 분할된 서브 배열을 반환
// let a = [1, 2, 3, 4, 5];
// let b = a.slice(0, 2);
// let c = a.slice(1, -1);


// // splice() slice와 유사하지만 원래의 배열을 변경시킨다.
// let a = [1, 2, 3, 4, 5]
// a.splice(0, 2);
// a.splice(2);
// a.splice(0, 2, 10, 20);
// a.splice(3, 0, 100, 200);
// console.log(a);

// // fill() 배열을 첫 번째 인수에 지정된 값으로 채운다.
// let a = new Array(5);
// a.fill(0);
// a.fill(1, 1);
// a.fill(1, 1, -1);


// // // indexOf() 인수값과 일치하는 맨 처음 요소의 인덱스를 반환
// let a = [0, 1, 2, 3, 2, 1, 0, NaN];
// let b = a.indexOf(2);
// let c = a.lastIndexOf(2);
// let d = a.indexOf(NaN);
// let e = a.indexOf(5);


// // includes() 인수에 지정된 값이 배열에 포함되어 있으면 true / 아니면 false

// let a = [0, true, 2, false, NaN];
// let b = a.includes(true);
// let c = a.includes(2);
// let d = a.includes(NaN);

// // sort() 배열을 정리할 때 사용, 알파벳 순으로 정렬한다.
// let a = ["apple", "cherry", "banana"];
// let b = a.sort();

// let c = [22, 333, 121];
// let d = c.sort();
// let e = c.sort((a, b) => a - b);

// // join() 배열의 모든 요소를 문자열로 뱐환하여 결합한 문자열을 반환
// let a = [1, 2, 3];
// let b = a.join();
// let c = a.join("")
// console.log(c);

// 다차원 배열
// let arr = new Array(2);
// for(let i = 0; i < arr.length; ++i)
//     arr[i] = new Array(3);
// console.log(arr);

// let arr = Array.from(new Array(2), () => new Array(3));


// //2차원 배열 접근

// arr[0][0] = 1;
// arr[0][1] = 2;
// arr[0][2] = 3;
// arr[1][0] = 4;
// arr[1][1] = 5;
// arr[1][2] = 6;
// console.table(arr);

 //for문을 사용하여 각 요소에 접근
// for(let i = 0; i < arr.length; ++1){
//     for(let j = 0; j < arr[i].length; ++1){
//         console.log(arr[i][j])
//     }
// }
// // forEach() 메서드를 사용하여 각 요소에 접근
// arr.forEach(r => r.forEach(c => console.log(c)));

// // push() 메서드를 사용하여 배열 끝에 요소를 추가
// arr.push([7, 8, 9]);

// // splice 메서드를 사용하여 첫 번째 인수 위치에 배열 추가
// arr.splice(2, 0, [10, 11, 12]);
// console.log(arr);