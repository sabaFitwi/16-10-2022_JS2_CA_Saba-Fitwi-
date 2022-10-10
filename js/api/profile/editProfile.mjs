//import { updatePostApi } from "./fetchApi.mjs";
import * as storage from "../localStorage.mjs";
import { authFetch } from "../authFetch.mjs";

//import { getProfile } from "./profilePost.mjs";
import { viewAllProfiles } from "./getProfile.mjs";

import { load } from "../localStorage.mjs";
import { profileApi } from "../fetchApi.mjs";

async function setUpdateProfile() {
  const form = document.querySelector("#editProfile");

  if (form) {
    const { name, email, avatar, banner } = load("user");
    form.name.value = name;
    form.email.value = email;

    const button = document.querySelector(".button");
    button.disabled = true;
    await viewAllProfiles(name);

    form.banner.value = banner;
    form.avatar.value = avatar;
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
  storage.save("banner", result.banner);

  return result;
}
