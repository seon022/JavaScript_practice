document.addEventListener("DOMContentLoaded", function () {
  const studentName = document.querySelector("#userName");
  const majorSelect = document.querySelector("#major");
  const subjectRadios = document.querySelectorAll("input[name='subject']");
  const checkboxes = document.querySelectorAll("input[type='checkbox']");
  const result = document.querySelector("#result");

  studentName.addEventListener("input", updateResult);
  majorSelect.addEventListener("change", updateResult);
  subjectRadios.forEach((radio) =>
    radio.addEventListener("change", updateResult)
  );
  checkboxes.forEach((checkbox) =>
    checkbox.addEventListener("change", updateResult)
  );

  function updateResult() {
    let selectedSubject = "";
    subjectRadios.forEach((radio) => {
      if (radio.checked) {
        selectedSubject = radio.parentNode.textContent.trim();
      }
    });

    const selectedMajor = majorSelect.options[majorSelect.selectedIndex].text;

    let selectedTimes = [];
    checkboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        selectedTimes.push(checkbox.parentNode.textContent.trim());
      }
    });

    result.innerHTML = `이름: ${studentName.value}<br>
                        선택한 학과: ${selectedMajor}<br>
                        선택한 과목: ${selectedSubject}<br>
                        시간: ${selectedTimes.join(", ")}`;
  }
});
