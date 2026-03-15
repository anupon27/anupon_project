
const registerForm = document.getElementById("register-form");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const age = document.getElementById("age");
const email = document.getElementById("email");
const username = document.getElementById("username");
const password = document.getElementById("password");

registerForm.addEventListener("submit", function (e) {
    e.preventDefault();
    checkInput();
});

function checkInput() {
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const ageValue = age.value.trim();
    const emailValue = email.value.trim();
    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();

    if (firstNameValue === "") {
        setErrorFor(firstName, "กรุณากรอกชื่อจริง");
    } else {
        setSuccessFor(firstName);
    }

    if (lastNameValue === "") {
        setErrorFor(lastName, "กรุณากรอกนามสกุล");
    } else {
        setSuccessFor(lastName);
    }

    if (ageValue === "") {
        setErrorFor(age, "กรุณากรอกอายุ");
    } else {
        setSuccessFor(age);
    }

    if (emailValue === "") {
        setErrorFor(email, "กรุณากรอกอีเมล");
    } else {
        setSuccessFor(email);
    }

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