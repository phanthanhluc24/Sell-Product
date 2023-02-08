let apiUser = "http://localhost:3000/user";

let apiAdmin = "http://localhost:3000/admin";
//login
const email = document.querySelector(".input-login-email");
const password = document.querySelector(".input-login-password");
const bntLogin = document.querySelector(".login__signInButton");
const bntLogins = document.querySelector(".login_signInButton");


// get user
const getUser = async () => {
  const response = await fetch(apiUser);
  const data = await response.json();
  return data;
};

const getAdmid = async () => {
  const response = await fetch("http://localhost:3000/admin");
  const data = await response.json();
  return data;
};

// login
bntLogin.addEventListener("click",(e)=>{
  e.preventDefault();
  if (email.value == "" || password.value == "") {
    alert("Please enter your email and password");
  }else if(email.value == "luc1234@" && password.value == "1234"){
    alert("Login success");
    window.location.href = "/pages/Admin.html";
  }
  
  else if(e){
    getUser().then((data) => {
      const user = data.find(
        (user) =>
          user.email == email.value && user.password == password.value
      );
      if (user) {
        alert("Login success");
        window.location.href = "/pages/product.html";
      }else {
        alert("Login failed");
      }
    });
  // }else if(e){
  //   getAdmid().then((data) => {
  //     const admin = data.find(
  //       (admin) =>
  //       admin.email == email.value && admin.password == password.value
  //     );
  //     if (admin) {
  //       alert("Login success");
  //       window.location.href = "/pages/Admin.html";
  //     } else {
  //       alert("Login failed");
  //     }
  //   });
  }
});




function callModal(){
    window.location.href="/pages/login.html";
}

function logout() {
    window.location.href="/pages/home.html";
}


function confirm(){
  alert("Vui lòng đăng nhập để có trải nghiệm tốt hơn")
}