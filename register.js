// let registerForm = document.getElementById("form");
// let usernameInput = document.getElementById("username");
// let emailInput = document.getElementById("email");
// let passwordInput = document.getElementById("psw");
// let passwordRepeatInput = document.getElementById("re-password");

// let usernameError = document.getElementById("usernameError");
// let emailError = document.getElementById("emailError");
// let passwordError = document.getElementById("passwordError");
// let passwordRepeatError = document.getElementById("passwordConfirmError");

// function deleteError() {
//   usernameError.innerText = "";
//   emailError.innerText = "";
//   passwordError.innerText = "";
//   passwordRepeatError.innerText = "";
// }
// function isValidEmail(email) {
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   return emailRegex.test(email);
// }
// let users = JSON.parse(localStorage.getItem("users")) || [];
// function checkUsername(username) {
//   let findUserIndex = users.findIndex((user) => user.userName === username);
//   return findUserIndex !== -1;
// }

// registerForm.onsubmit = function register(e) {
//   e.preventDefault();

//   let usernameValue = usernameInput.value;
//   let emailValue = emailInput.value;
//   let passwordValue = passwordInput.value;
//   let passwordRepeatValue = passwordRepeatInput.value;

//   if (checkUsername(usernameValue)) {
//     usernameError.innerText = "Tên đăng nhập đã tồn tại";
//   } else if (usernameValue === "") {
//     usernameError.innerText = "Không được để trống tên đăng nhập";
//   } else {
//     deleteError();
//     if (isValidEmail(emailValue)) {
//       deleteError();
//       if (passwordValue.length >= 6) {
//         deleteError();
//         if (passwordRepeatValue == passwordValue) {
//           deleteError();
//           let newUser = {
//             id: Math.floor(Math.random() * 10000000),
//             userName: usernameValue,
//             email: emailValue,
//             password: passwordValue,
//           };
//           users.push(newUser);
//           localStorage.setItem("users", JSON.stringify(users));
//           window.location.href = "../Login/login.html";
//         } else {
//           passwordRepeatError.innerText = "Mật khẩu không trùng khớp";
//         }
//       } else {
//         passwordError.innerText = "Mật khẩu không đúng định dạng";
//       }
//     } else {
//       emailError.innerText = "Email không đúng";
//     }
//   }
// };

// validation form register and register user local storage
const inputUsernameRegister = document.querySelector(".input-signup-username");
const inputPasswordRegister = document.querySelector(".input-signup-password");
const btnRegister = document.querySelector(".signup__signInButton");

// validation form register and register user local storage

btnRegister.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    inputUsernameRegister.value === "" ||
    inputPasswordRegister.value === ""
  ) {
    alert("vui lòng không để trống");
  } else {
    // array user
    const user = {
      username: inputUsernameRegister.value,
      password: inputPasswordRegister.value,
    };
    let json = JSON.stringify(user);
    localStorage.setItem(inputUsernameRegister.value, json);
    alert("Đăng Ký Thành Công");
    window.location.href = "http://127.0.0.1:5500/login/login.html";
  }
});
