import { load } from "../localStorage.mjs";
const { avatar, name } = load("user");

const profileAvatar = document.querySelector(".profileAvatar");
profileAvatar.innerHTML += `
<div>
 <img
 src="${avatar}"
 alt="avatar"
 class="rounded-circle me-2"
 style="width: 38px; height: 38px; object-fit: cover"
/>
</div>
<div>               
<p>${name.replace("_", " ")}</p>
</div> `;
