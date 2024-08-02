const draggables = document.querySelectorAll("li");
const container = document.querySelector("ul");

draggables.forEach((draggable) => {
  draggable.addEventListener("dragstart", () => {
    draggable.classList.add("dragging");
  });
  draggable.addEventListener("dragend", () => {
    draggable.classList.remove("dragging");
  });
});

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

function getDragAfterElement(container, x) {
  const draggableElements = [
    ...container.querySelectorAll("li:not(.dragging)"),
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
