// function Point(x, y) {
//   this.x = x;
//   this.y = y;
// }
// Point.prototype = {
//   toString: function () {
//     return `(${this.x}, ${this.y})`;
//   },
// };
// let pt1 = new Point(10, 20);
// let pt2 = new Point(100, 200);
// console.log(pt1.toString());
// console.log(pt2.toString());
// console.log(pt1 instanceof Point);
// console.log(pt2 instanceof Point);

// function Circle(radius) {
//   this.radius = radius;
// }
// Circle.prototype.getArea = function () {
//   return Math.PI * this.radius ** 2;
// };
// const circle1 = new Circle(1);
// const circle2 = new Circle(2);
// console.log(circle1.getArea === circle2.getArea); // false
// 생성자 함수 안 에 메소드 만들어놓으면 , 새로운 인스턴스끼리는 같은 메소드를 공유하지 않음(각각의 인스턴스는 다른 메모리를 참조하고 있기떄문에)
// Circle.prototype.getArea 함수의 프로토타입 속성에 프로토타입 객체를 저장

// class Person {
//   constructor(name) {
//     this.name = name;
//   }
//   sayHi() {
//     console.log(`Hi ${this.name}`);
//   }
//   static sayHello() {
//     console.log("Hello");
//   }
// }
// const me = new Person("Lee");
// me.sayHi();
// Person.sayHello();

const Person = (function () {
  function Person(name) {
    this.name = name;
  }
  Person.prototype.sayHi = function () {
    console.log("Hi" + this.name);
  };
  Person.sayHello = function () {
    console.log("Hello!");
  };
  return Person;
})();
const me = new Person("Lee");
console.log(me.name);
me.sayHi();
Person.sayHello();
