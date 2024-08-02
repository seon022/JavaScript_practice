// let div = document.querySelector("div");
// console.log(div);
// function changeContent() {
//   div.outerHTML = "<div><h1>DOM API</h1><p>선수조건 : 없음</p></div>";
// }

// const ele = document.getElementsByTagName("li");
// console.log(ele);
// console.log([...ele]);
// // 첫번째 요소만 반환해줌.
// [...ele].forEach((ele) => {
//   ele.style.color = "red";
// });

// const elements = document.getElementsByClassName("fruit");
// [...elements].forEach((el) => (el.style.color = "red"));

// const apple = document.getElementsByClassName("fruit apple");
// [...apple].forEach((el) => {
//   el.style.color = "blue";
// });

// const boxEl = document.querySelector(".box");
// boxEl.addEventListener("click", function () {
//   console.log("Click!!");
//   boxEl.classList.toggle("active");
// });

// const boxEls = document.querySelectorAll(".box");
// boxEls.forEach(function (boxEl, idx) {
//   boxEl.classList.add(`order-${idx + 1}`);
// });

// // ----------
// const div = document.getElementById("my_div");
// const clearBtn = document.getElementById("clearBtn");
// const result = document.getElementById("result");

// div.addEventListener("click", (event) => {
//   result.innerHTML += "<div>click</div>";
// });

// div.addEventListener("mousedown", (event) => {
//   result.innerHTML += "<div>mousedown</div>";
// });
// div.addEventListener("mouseup", (event) => {
//   result.innerHTML += "<div>mouseup</div>";
// });
// clearBtn.addEventListener("click", () => {
//   result.innerHTML = "";
// });

// function sayHi(name) {
//   console.log(`Hi ${name}`);
// }

// const button = document.querySelector("button");

// button.onclick = () => {
//   console.log("button clicked 1");
// };
// // 프로퍼티 형식은 이벤트 하나밖에 안됨.
// button.addEventListener("click", function () {
//   console.log("button clicked 2");
// });
// button.addEventListener("click", function () {
//   console.log("button clicked 3");
// });
// // addEventListener는 같은거에 이벤트 여러개 됨. 등록순서대로 나옴.

// const handleClick = () => console.log("button Click");
// button.addEventListener("click", handleClick);
// button.removeEventListener("click", handleClick);
// 참조가 동일한 이벤트 핸들러는 중복등록되니까 하나만 됨.

// button.addEventListener("click", function add() {
//   console.log("click!!");
//   button.removeEventListener("click", add);
// });

// const handleClick = () => console.log("button Click");
// button.onclick = handleClick;
// button.removeEventListener("click", handleClick);

// // button.onclick = null;
// // 프로퍼티로 등록한건 remove로 안없애짐.

// const msg = document.querySelector(".message");
// function showCords(e) {
//   msg.textContent = `clientX: ${e.clientX}, clienty: ${e.clientY}`;
// }
// document.onclick = showCords;

// const fruits = document.getElementById("fruits");
// function activate({ target }) {
//   [...fruits.children].forEach((fruit) => {
//     fruit.classList.toggle("active", fruit === target);
//   });
// }
// fruits.onclick = activate;

// const fruits = document.getElementById("fruits");
// function activate({ target }) {
//   if (!target.matches("#fruits > li")) return;
//   [...fruits.children].forEach((fruit) => {
//     fruit.classList.toggle("active", fruit === target);
//   });
// }
// fruits.onclick = activate;

// box - drag 시작 -------------------------------------------------
// const box = document.querySelector(".box");
// const initialMousePos = { x: 0, y: 0 };
// const offset = { x: 0, y: 0 };

// const move = (e) => {
//   offset.x = e.clientX - initialMousePos.x;
//   offset.y = e.clientY - initialMousePos.y;
//   box.style.transform = `translate3d(${offset.x}px, ${offset.y}px, 0)`;
// };

// box.addEventListener("mousedown", (e) => {
//   initialMousePos.x = e.clientX - offset.x;
//   initialMousePos.y = e.clientY - offset.y;

//   document.addEventListener("mousemove", move);
// });

// document.addEventListener("mouseup", () => {
//   document.removeEventListener("mousemove", move);
// });
// box - drag -------------------------------------------------

// box -click한곳으로 이동 -------------------------------------------------
// const box = document.querySelector(".box");
// const offset = { x: 0, y: 0 };

// document.addEventListener("click", (e) => {
//   const boxWidth = box.offsetWidth;
//   const boxHeight = box.offsetHeight;

//   const newX = e.clientX - boxWidth / 2;
//   const newY = e.clientY - boxHeight / 2;
//   offset.x = newX;
//   offset.y = newY;

//   box.style.transform = `translate3d(${offset.x}px, ${offset.y}px, 0)`;
// });
// //-------------------------------------------------
// const x = document.getElementById("name");
// x.onfocus = function () {
//   changeBgColorFo();
// };
// x.onblur = function () {
//   changeBgColorBl();
// };

// function changeBgColorFo() {
//   x.style.backgroundColor = "lightpink";
// }
// function changeBgColorBl() {
//   x.style.backgroundColor = "grey";
// }
// const keyInput = document.getElementById("keyInput");
// let text = "";
// keyInput.addEventListener("keydown", showKey);
// function showKey(e) {
//   text += e.key;
//   document.getElementById("show").innerHTML = text;
// }
