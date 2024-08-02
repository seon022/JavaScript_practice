document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".image-container");
  let isDragging = false;
  let startX;
  let scrollLeft;

  container.addEventListener("mousedown", (e) => {
    isDragging = true;
    container.style.cursor = "grabbing";
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
  });

  container.addEventListener("mouseleave", () => {
    isDragging = false;
    container.style.cursor = "grab";
  });

  container.addEventListener("mouseup", () => {
    isDragging = false;
    container.style.cursor = "grab";
  });

  container.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 2; // 스크롤 속도 조절
    container.scrollLeft = scrollLeft - walk;
  });
});
