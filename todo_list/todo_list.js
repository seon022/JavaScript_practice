const todoInput = document.querySelector("#todoInput input");
const btn = document.getElementById("addItem");
const list = document.getElementById("todoList");

btn.onclick = () => {
  const newLi = document.createElement("li");
  const newCheckbox = document.createElement("input");
  newCheckbox.type = "checkbox";
  const newSpan = document.createElement("span");
  const newBtn = document.createElement("button");

  // Set up the new elements
  newSpan.textContent = `💫 ${todoInput.value}`;
  newSpan.style.color = "blue";
  newBtn.textContent = "삭제";

  // Append elements to the new li
  newLi.appendChild(newCheckbox);
  newLi.appendChild(newSpan);
  newLi.appendChild(newBtn);
  list.appendChild(newLi);

  // Clear the input field
  todoInput.value = "";

  // Add event listener to the checkbox to toggle strikethrough
  newCheckbox.addEventListener("change", () => {
    if (newCheckbox.checked) {
      newSpan.style.textDecoration = "line-through";
    } else {
      newSpan.style.textDecoration = "none";
    }
  });

  // Add event listener to the delete button to remove the li
  newBtn.addEventListener("click", () => {
    list.removeChild(newLi);
  });
};
