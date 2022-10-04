import { registerApi } from "../fetchApi.mjs";
//import * as storage from "./localStorage.mjs";
// const userEmail = localStorage.getItem("userEmail");
// const userPassword = localStorage.getItem("userPassword");
// const errorMessage = document.querySelector(".error-message");

const form = document.querySelector("#registerForm");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.target;

  const user = {
    name: form.name.value,
    email: form.email.value,
    password: form.password.value,
    avatar: form.avatar.value,
    banner: form.banner.value,
  };

  //const { name, email, password, avatar, banner } = user;

  console.log(user);

  async function register(user) {
    const options = {
      method: "post",
      body: JSON.stringify(user),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };
    const response = await fetch(registerApi, options);
    const result = await response.json();
    alert("you are registered");

    // await fetch(registerApi, options)
    //   .then((response) => response.json())
    //   .then((result) => console.log({ result }));
    // localStorage.setItem("userEmail", email);
    // localStorage.setItem("userAvatar", avatar);
    // localStorage.setItem("userName", name);
    // localStorage.setItem("userPassword", password);
    return result;
  }
  register(user);

  // const options = {
  //   method: "POST",
  //   body: JSON.stringify(user),
  //   headers: {
  //     "Content-type": "application/json; charset=UTF-8",
  //   },
  // };

  // fetch(registerApi, options)
  //   .then((response) => response.json())
  //   .then((user) => console.log({ user }));

  // if (user.email == userEmail && user.password == userPassword) {
  //   window.location.href = "/profile.html";
  // } else {
  //   errorMessage.innerHTML += `<p class"">invalid email or password. Please use your register account</p>`;
  //   console.log("invalid email or password. please use your register account");
  // }
});
