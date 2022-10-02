import { postsApi as api } from "./fetchApi.mjs";
import { accessToken as token } from "./authorization.mjs";
const createFeed = document.querySelector(".create-feeds");
const searchButton = document.querySelector("#search-button");
const options = {
  headers: {
    "Content-type": "application/json;",
    Authorization: token,
  },
};
let newFrameList = [];

async function searchItem() {
  const searchInput = document.querySelector("#search-input");

  console.log(searchInput.value);

  try {
    const response = await fetch(api, options);
    const data = await response.json();
    inputControl(data);
    // console.log(data);
  } catch (error) {
    console.log("error");
  }
  function inputControl(users) {
    searchInput.addEventListener("keyup", (event) => {
      const inputValue = event.currentTarget.value.toLowerCase();
      console.log(inputValue);
      const inputResult = users.filter((user) => {
        if (user.title.toLowerCase().startsWith(inputValue)) {
          return true;
        }
      });
      console.log(inputResult);
    });
  }
}

searchButton.onclick = searchItem;
