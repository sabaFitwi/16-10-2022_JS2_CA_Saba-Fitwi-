import { registerApi } from "../fetchApi.mjs";

const form = document.querySelector("#registerForm");
/**
 * submit register form data.
 * @param {Event} submit form submission
 */
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

  console.log(user);
  /**
   * Register a user
   * @param {String} name name with alphabet number and underscore
   * @param {String} email -email with valid account
   * @param {String} password password with minimum of 8 characters
   * @returns {Object} response object with a user information
   */

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
