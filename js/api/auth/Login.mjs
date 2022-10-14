import { logInApi } from "../fetchApi.mjs";
import * as storage from "../localStorage.mjs";
import { load } from "../localStorage.mjs";
const token = load("token");

const errorMessage = document.querySelector(".error-message");

const form = document.querySelector("#loginForm");

/**
 * submit login form data.
 * @param {Event} submit form submission
 */
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.target;

  const user = {
    email: form.email.value,
    password: form.password.value,
  };

  console.log(user);
  /**
   * Login a user
   *   Save the users information in a local storage
   * @param {String} email-email with valid account
   * @param {String} password password with minimum of 8 characters
   * @returns {Object} response object (email, password and accessToken)
   */

  async function login(user) {
    const options = {
      method: "post",
      body: JSON.stringify(user),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };
    const response = await fetch(logInApi, options);
    const { accessToken, ...profile } = await response.json();
    storage.save("token", accessToken);
    storage.save("user", profile);
    window.location.replace("/profile.html");

    if (token === "undefined" || token === null) {
      console.log("error email or password");
      /**
       * Displays a message to the user
       */
      errorMessage.innerHTML = ` <div> <p btn-danger>Invalid email or password</p></div>`;
    } else {
      window.location.href("/profile.html");
    }
  }
  login(user);
});
