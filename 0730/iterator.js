// let arr = [1, 2, 3, 4, 5];
// let iterator = arr[Symbol.iterator]();

// console.log(iterator);

// let result = iterator.next();
// console.log(result);

// while (!result.done) {
//   console.log(result.value);
//   result = iterator.next();
// }

// let copy = [...iterator];
// console.log(copy);

// -------------------------------------------
// class Sequence {
//   constructor(from = 0, to = Infinity, interval = 1) {
//     this.from = from;
//     this.to = to;
//     this.interval = interval;
//   }
//   [Symbol.iterator]() {
//     let next = this.from;
//     return {
//       next: () => {
//         if (next <= this.to) {
//           let result = { value: next, done: false };
//           next += this.interval;
//           return result;
//         }
//         return { value: undefined, done: true };
//       },
//     };
//   }
// }
// let evenNumbers = new Sequence(2, 10, 2);
// let iterator = evenNumbers[Symbol.iterator]();
// let result = iterator.next();
// console.log(result);

// while (!result.done) {
//   console.log(result.value);
//   result = iterator.next();
// }

// for (let num of evenNumbers) {
//   if (num > 7) break;
//   console.log(num);
// }

// function* generate() {
//   console.log("제너레이터 실행");
//   console.log("1 생성");
//   yield 1;
//   console.log("2 생성");
//   yield 2;
//   console.log("3 생성");
//   yield 3;
// }
// let gen = generate();
// let result = gen.next();
// result = gen.next();
// while (!result.done) {
//   console.log(result.value);
//   result = gen.next();
// }
// let iterator = gen[Symbol.iterator]();
// console.log(iterator);

// function* sequence(from = 0, to = Infinity, interval = 2) {
//   let next = from;
//   while (next <= to) {
//     yield next;
//     next += interval;
//   }
// }
// let evenSeq = sequence(1, 10, 2);
// for (let seq of evenSeq) {
//   console.log(seq);
// }

class Sequence {
  constructor(from = 0, to = Infinity, interval = 1) {
    this.from = from;
    this.to = to;
    this.interval = interval;
  }
  *[Symbol.iterator]() {
    let num = this.from;
    while (num <= this.to) {
      yield num;
      num += this.interval;
    }
  }
}

// function* generateIterables(...iterables) {
//   for (let iterable of iterables) {
//     for (let item of iterable) yield item;
//   }
// }

function* generateIterables(...iterables) {
  for (let iterable of iterables) {
    yield* iterable;
  }
}

// let evenNumbers = new Sequence(2, 10, 2);
let generator = generateIterables("abc", [1, 2, 3]);
let arr = [...generator];
console.log(arr);
