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

// ---------------------------------------------------------
// const Person = (function () {
//   function Person(name) {
//     this.name = name;
//   }
//   Person.prototype.sayHi = function () {
//     console.log("Hi" + this.name);
//   };
//   Person.sayHello = function () {
//     console.log("Hello!");
//   };
//   return Person;
// })();
// const me = new Person("Lee");
// console.log(me.name);
// me.sayHi();
// Person.sayHello();

// ---------------------------------------------------------
// class Square {
//   constructor(width, height) {
//     this.width = width;
//     this.height = height;
//   }
//   area() {
//     return this.width * this.height;
//   }
//   static area2(width, height) {
//     return width * height;
//   }
// }
// const square = new Square(10, 10);
// console.log(square.area());
// console.log(Square.area2(20, 20));

// ---------------------------------------------------------
// const Person = {
//   firstName: "Minji",
//   lastName: "Choi",

//   get fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
//   set fullName(name) {
//     [this.firstName, this.lastName] = name.split("");
//   },
// };
// console.log(Person.fullName);
// console.log(`${this.firstName} ${this.lastName}`);
// ??????????????? undefined

// ---------------------------------------------------------
// class Person {
//   #name = "";
//   constructor(name) {
//     this.#name = name;
//   }
//   get name() {
//     return this.#name.trim();
//   }
// }
// const me = new Person("Lee");
// console.log(me.name);

// ---------------------------------------------------------
// super()

// class Vehicle {
//   constructor(name, wheel) {
//     this.name = name;
//     this.wheel = wheel;
//   }
// }
// const myVehicle = new Vehicle("자전거", 2);
// console.log(myVehicle);

// class Bicycle extends Vehicle {
//   constructor(name, wheel) {
//     super(name, wheel);
//   }
// }
// const myBicycle = new Bicycle("따릉이", 2);
// console.log(myBicycle);

// class Car extends Vehicle {
//   constructor(name, wheel, license) {
//     super(name, wheel);
//     this.license = license;
//   }
// }
// const myCar = new Car("벤츠", 4, true);
// console.log(myCar);

// // ---------------------------------------------------------
// // super클래스의 메소드 상속
// class Base {
//   constructor(name) {
//     this.name = name;
//   }
//   sayHi() {
//     return `Hi ${this.name}, 잘 지냈니?`;
//   }
// }

// class Derived extends Base {
//   sayHi() {
//     return `${super.sayHi()}`;
//   }
// }

// const derived = new Derived("Lee");
// console.log(derived.sayHi());

// ---------------------------------------------------------
// 예제1
// class Book {
//   constructor(title, author, price) {
//     this.title = title;
//     this.author = author;
//     this.price = price;
//   }
// }

// Book.prototype.page = 0; // 기본값으로 null 설정
// // 프로토타입을 이용하여 page 프로퍼티 추가

// // 예시 사용
// const myBook = new Book("JavaScript", "ksy", 10000);
// myBook.page = 180; // 페이지 수 설정
// console.log(myBook);

//---------------------------------------------------------
// // 예제3
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   sayHi() {
//     return `안녕하세요. 제 이름은 ${this.name}이고,  나이는 ${this.age}살입니다.`;
//   }
// }
// const onePerson = new Person("stst", 100);
// console.log(onePerson.sayHi());

// //---------------------------------------------------------
// class Calculator {
//   static plus(a, b) {
//     console.log(`${a} + ${b} = ${a + b} `);
//   }
//   static minus(a, b) {
//     console.log(`${a} - ${b} = ${a - b} `);
//   }
//   static multiply(a, b) {
//     console.log(`${a} * ${b} = ${a * b} `);
//   }
//   static devide(a, b) {
//     console.log(`${a} / ${b} = ${a / b} `);
//   }
// }
// Calculator.plus(100, 4);

function Calculator() {}
Calculator.add = function (a, b) {
  return a + b;
};
console.log(Calculator.add(2, 5));
