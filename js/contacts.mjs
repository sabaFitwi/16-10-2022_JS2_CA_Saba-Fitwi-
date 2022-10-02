import { postsApi as api } from "./fetchApi.mjs";
import { accessToken as token } from "./authorization.mjs";

const contactList = document.querySelector(".contactsList");

const options = {
  headers: {
    "Content-type": "application/json;",
    Authorization: token,
  },
};

async function getContact() {
  try {
    const response = await fetch(api, options);
    const data = await response.json();

    allContact(data);
  } catch (error) {
    console.log("error");
  }

  function allContact(users) {
    if (users) {
      //   const usersMedia = users.filter((user) => user.author.avatar !== "");
      //   //console.log(usersMedia);
      //   usersMedia.forEach((user, index) => {
      //     usersMedia.sort(() => 0.5 - Math.random()).slice(0);
      //     if (index <= 5) {
      //       contactList.innerHTML += `
      //       <div>
      //       <span
      //         class="d-inline-block"
      //         tabindex="0"
      //         data-bs-toggle="popover"
      //         data-bs-trigger="hover focus"
      //         data-bs-content="${user.author.name.replace("_", " ")}"
      //         data-bs-placement="top"
      //       >
      //         <a href="/singleProfile.html?${user.id}" class="contactsProfile">
      //           <img
      //             src="${
      //               user.author.avatar ? user.author.avatar : "/images/M.jpg"
      //             }"
      //             alt=" "
      //             class="rounded-circle me-2 avatar-image"
      //           />
      //         </a>
      //       </span>
      //     </div>
      //  `;
      //       console.log(user.id);
      //       var popoverList1 = [].slice.call(
      //         document.querySelectorAll('[data-bs-toggle = "popover"]')
      //       );
      //       var popoverList2 = popoverList1.map(function (popoverTriggerfun) {
      //         return new bootstrap.Popover(popoverTriggerfun);
      //       });
      //     }
      //   });
    }
  }
}
getContact();
