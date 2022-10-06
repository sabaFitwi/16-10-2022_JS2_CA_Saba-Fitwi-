//import { updatePostApi } from "./fetchApi.mjs";

import { authFetch } from "../authFetch.mjs";

import { getProfile } from "./profilePost.mjs";
//import { viewAllProfiles } from "./getProfile";

import { load } from "../localStorage.mjs";
import { profileApi } from "../fetchApi.mjs";

async function setUpdateProfile() {
  const form = document.querySelector("#editProfile");

  if (form) {
    const { name, email } = load("user");
    form.name.value = name;
    form.email.value = email;

    const button = document.querySelector(".button");
    button.disabled = true;
    const profileData = await getProfile(name);

    // form.banner.value = banner;
    // form.avatar.value = avatar;
    button.disabled = false;

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.target;

      const profileData = {
        name: form.name.value,
        email: form.email.value,
        avatar: form.avatar.value,
        banner: form.banner.value,
      };
      profileData.name = name;
      profileData.email = email;

      update(profileData);
      console.log(profileData);
    });
  }
}
setUpdateProfile();
async function update(profileData) {
  if (!profileData.name) {
    throw new Error("update requires a profileID");
  }

  const updateProfileApi1 = profileApi + "/" + `${profileData.name}` + "/media";
  console.log(updateProfileApi1);

  const response = await authFetch(updateProfileApi1, {
    method: "PUT",
    body: JSON.stringify(profileData),
  });
  const result = await response.json();
  return result;
}
// import { accessToken as token2 } from "./collection/authorization.mjs";

// const updatePost = {
//   title: "",
//   body: "",
//   media: "https://postimg.cc/23YGDmSx",
// };
// console.log(updatePost);
// const options = {
//   method: "PUT",
//   body: JSON.stringify(updatePost),
//   headers: {
//     "Content-type": "application/json; charset=UTF-8",
//     Authorization: token2,
//   },
// };
// fetch(updatePostApi, options)
//   .then((response) => response.json())
//   .then((updatePost) => console.log(updatePost));
// console.log(updatePost);
