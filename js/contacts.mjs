import { postsApi } from "./api/fetchApi.mjs";
import { authFetch } from "./api/authFetch.mjs";

const contactList = document.querySelector(".contactsList");

async function getContact() {
  try {
    const postURL =
      postsApi + "?_author=true&_comments=true&reactions=true&limit=200";
    const response = await authFetch(postURL);
    const data = await response.json();

    allContact(data);
  } catch (error) {
    console.log("error");
  }

  function allContact(users) {
    if (users) {
      const usersMedia = users.filter(
        (user, index) => user.author.avatar !== ""
      );
      console.log(usersMedia);

      usersMedia.map((user, index) => {
        usersMedia.sort(() => 0.5 - Math.random()).slice(0);

        if (index <= 5) {
          contactList.innerHTML += `
            <div>
            <span
              class="d-inline-block"
              tabindex="0"
              data-bs-toggle="popover"
              data-bs-trigger="hover focus"
              data-bs-content="${user.author.name.replace("_", " ")}"
              data-bs-placement="top"
            >
              <a href="single-post.html?id=${user.id}" >
                <img
                  src="${
                    user.author.avatar ? user.author.avatar : "images/M.jpg"
                  }"
                  alt=" "
                  class="rounded-circle me-2 avatar-image"
                />
              </a>
            </span>
          </div>
       `;

          var popoverList1 = [].slice.call(
            document.querySelectorAll('[data-bs-toggle = "popover"]')
          );
          var popoverList2 = popoverList1.map(function (popoverTriggerfun) {
            return new bootstrap.Popover(popoverTriggerfun);
          });
        }
      });
    }
  }
}
getContact();
