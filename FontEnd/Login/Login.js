
const loginForm = document.getElementById("login-form");
const username = document.getElementById("username");
const password = document.getElementById("password");

loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    checkInput();
});

function checkInput() {
    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();

    if (usernameValue === "") {
        setErrorFor(username, "กรุณากรอกชื่อผู้ใช้");
    } else {
        setSuccessFor(username);
    }

    if (passwordValue === "") {
        setErrorFor(password, "กรุณากรอกรหัสผ่าน");
    } else {
        setSuccessFor(password);
    }

}
function setErrorFor(input, message) {
    const inputBox = input.parentElement;
    const errorDisplay = inputBox.querySelector(".error");

    errorDisplay.innerText = message;
    inputBox.classList.add("error");

}
function setSuccessFor(input) {
    const inputBox = input.parentElement;
    const errorDisplay = inputBox.querySelector(".error");

    errorDisplay.innerText = "";
    inputBox.classList.remove("error");
    inputBox.classList.add("success");
}