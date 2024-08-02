const userId = document.querySelector("#userId");
const email = document.getElementById("email");
const password = document.getElementById("password");
const checkPassword = document.getElementById("checkPassword");
const checkMailling = document.getElementById("mailCheck");
const goBtn = document.getElementById("go");
const cancleBtn = document.getElementById("cancle");
goBtn.addEventListener("click", () => {
  checkId();
  checkPw();
  comparePw();
});

function checkId() {
  if (userId.value.length < 4 || userId.value.length > 15) {
    alert("아이디는 4~15자리의 영문과 숫자로 입력하세요");
    userId.select();
  }
}
function checkPw() {
  if (password.value.length < 8 && password.value > 0) {
    alert("비밀번호는 8자리 이상이어야 합니다.");
    password.value = "";
    password.focus();
  }
}

function comparePw() {
  if (password.value !== checkPassword.value) {
    alert("암호가 다릅니다. 다시 입력해주세요");
    checkPassword.focus();
    checkPassword.value = 0;
  }
}
