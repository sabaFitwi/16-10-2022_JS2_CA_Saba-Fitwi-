import { logInApi } from "./fetchApi.mjs";
// const userEmail = localStorage.getItem("userEmail");
// const userPassword = localStorage.getItem("userPassword");
// const errorMessage = document.querySelector(".error-message");

const form = document.querySelector("#loginForm");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.target;

  const user = {
    email: form.email.value,
    password: form.password.value,
  };

  console.log(user);
  async function login(user) {
    const options = {
      method: "post",
      body: JSON.stringify(user),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };
    fetch(logInApi, options)
      .then((response) => response.json())
      .then((user) => console.log({ user }));
  }
  login(user);
  // const options = {
  //   method: "POST",
  //   body: JSON.stringify(user),
  //   headers: {
  //     "Content-type": "application/json; charset=UTF-8",
  //   },
  // };

  // fetch(logInApi, options)
  //   .then((response) => response.json())
  //   .then((user) => localStorage.setItem("user", user.accessToken));
  // console.log({ user });

  // if (user.email == userEmail && user.password == userPassword) {
  //   window.location.href = "/profile.html";
  // } else {
  //   errorMessage.innerHTML += `<p class"">invalid email or password. Please use your login account</p>`;
  //   console.log("invalid email or password. please use your login account");
  // }
});
