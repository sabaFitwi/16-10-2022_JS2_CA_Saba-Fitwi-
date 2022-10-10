import { load } from "../localStorage.mjs";
const banner = load("banner");
console.log(load);

const profileBanner = document.querySelector(".banner");
profileBanner.innerHTML += `
<div>
<img
src="${banner}"
class="d-block mx-auto shadow rounded"
style="width: 100%; height: 300px; object-fit: cover"
/>
</div>
 `;
