// // function func(event) {
// //   let text = event.target.tagName;
// //   document.getElementById("show").innerHTML = text;
// // }

// const item = document.querySelector(".item");

// item.addEventListener("dragstart", () => {
//   console.log("드래그 시작!");
// });

// item.addEventListener("drag", (e) => {
//   console.log("드래그하면 나와라!");
// });

// // 박스1
// const container1 = document.querySelector(".container1");
// container1.addEventListener("dragover", (e) => {
//   console.log("박스영역에 자리하고 있어");
//   e.preventDefault();
// });
// container1.addEventListener("drop", (e) => {
//   console.log("1번에 드래그 드롭");
// });

// // 박스2
// const container2 = document.querySelector(".container2");
// container2.addEventListener("dragenter", (e) => {
//   console.log("박스 영역에 진입!!");
//   e.preventDefault();
// });
// container2.addEventListener("dragover", (e) => {
//   console.log("박스영역에 자리하고 있어");
//   e.preventDefault();
// });
// container2.addEventListener("dragleave", (e) => {
//   console.log("박스 영역 떠남...");
// });

// // 드래그 끝나서 드롭
// container2.addEventListener("drop", (e) => {
//   console.log("2번에 드래그 드롭");
// });

// document.getElementById("appendChildBtn").onclick = function () {
//   const parent = document.getElementById("parent");
//   const newElment = document.createElement("div");
//   newElment.textContent = "New Child";
//   parent.appendChild(newElment);
// };

// document.getElementById("insertBefore").onclick = function () {
//   const parentEl = document.getElementById("parent");
//   const newEl = document.createElement("div");
//   newEl.textContent = "new Child!!";

//   const reference = document.getElementById("reference");
//   parentEl.insertBefore(newEl, reference);
// };

// 드래그 앤 드롭===================

const draggables = document.querySelectorAll(".draggable");
const containers = document.querySelectorAll(".container");

draggables.forEach((draggable) => {
  draggable.addEventListener("dragstart", () => {
    draggable.classList.add("dragging");
  });

  draggable.addEventListener("dragend", () => {
    draggable.classList.remove("dragging");
  });
});

containers.forEach((container) => {
  container.addEventListener("dragover", (e) => {
    e.preventDefault();
    const afterElement = getDragAfterElement(container, e.clientX);
    const draggable = document.querySelector(".dragging");
    if (afterElement == undefined) {
      container.appendChild(draggable);
    } else {
      container.insertBefore(draggable, afterElement);
    }
  });
});
function getDragAfterElement(container, x) {
  // NodeList를 배열로 변환
  const draggableElements = [
    ...container.querySelectorAll(".draggable:not(.dragging)"),
  ];

  return draggableElements.reduce(
    (closest, child) => {
      const box = child.getBoundingClientRect();
      const offset = x - box.left - box.width / 2;
      if (offset < 0 && offset > closest.offset) {
        return { offset: offset, element: child };
      } else {
        return closest;
      }
    },
    { offset: Number.NEGATIVE_INFINITY }
  ).element;
}
