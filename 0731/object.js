const obj1 = new Object();
const obj2 = {};
const obj3 = { name: "강선영", company: "ㅎㅎㅎ" };
console.log(obj1);
console.log(obj2);
console.log(obj3);

obj3["email"] = "naver.com";
obj3.phone = "0101231212";
console.log(obj3);

delete obj3.phone;
console.log(obj3);

console.log("email" in obj3);
console.log("phone" in obj3);

console.log(Object.keys(obj3));
// 배열의 형태로 키가 나옴.
console.log(Object.values(obj3));
// 배열의 형태로 value가 나옴.

for (const key in obj3) {
  console.log(key, obj3[key]);
}
// for in
// 객체의 key값을 순회할  수 있음.
