let users = JSON.parse(localStorage.getItem("users")) || [];
console.log(users);

let formLogin = document.getElementById("login-form");
let userLogin = document.getElementById("username");
let passLogin = document.getElementById("psw");

let usernameErr = document.getElementById("usernameErr");
let passErr = document.getElementById("passErr");

function deleteErr() {
  usernameErr.innerText = "";
  passErr.innerText = "";
}

formLogin.onsubmit = function login(e) {
  e.preventDefault();
  let userLoginValue = userLogin.value;
  let passLoginValue = passLogin.value;
  let user = users.find((user) => user.userName === userLoginValue);

  if (userLoginValue == "") {
    usernameErr.innerText = "Tên đăng nhập không được bỏ trống";
  } else if (!user) {
    deleteErr();
    usernameErr.innerText = "Tên đăng nhập không tồn tại";
  } else {
    deleteErr();
    if (passLoginValue !== user.password) {
      deleteErr();
      passErr.innerText = "Mật khẩu không đúng";
    } else {
      deleteErr();
      alert("Thành công");
    }
  }
};
