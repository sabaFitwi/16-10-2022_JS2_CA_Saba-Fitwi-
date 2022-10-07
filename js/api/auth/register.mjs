import { registerApi } from "../fetchApi.mjs";

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

    return result;
  }
  register(user);
});
