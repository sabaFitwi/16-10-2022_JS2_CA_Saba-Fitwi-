import { authFetch } from "../authFetch.mjs";
import { postsApi } from "../fetchApi.mjs";
import { displayError } from "../../component/displayError.mjs";
import { dateOptions as dateFormat } from "../../component/dateConverter.mjs";
import { load } from "../localStorage.mjs";
// This  load will be used on the comment area
const name = load("user").name;
const avatar = load("user").avatar;

const createFeed = document.querySelector(".create-feeds");

const searchInput = document.querySelector(".search-input");

/**
 * Get a post from the Api and render to the home page.
 * @param {Function} Function the function to get the post.
 *
 */
let data = [];

async function viewAllPosts() {
  createFeed.innerHTML += `<button class="btn btn-primary mt-5 loaderButton" type="button" disabled>
    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
    Loading...
  </button>`;
  const loaderButton = document.querySelector(".loaderButton");
  try {
    const postURL =
      postsApi +
      "?_author=true&_comments=true&reactions=true&per_page=30&sort=created&sortOrder=desc&limit=200";
    const response = await authFetch(postURL);
    data = await response.json();

    console.log(data);
    getAllPosts(data);
  } catch (error) {
    createFeed.innerHTML = displayError("An error occurred. Please try again");

    loaderButton.style.display = "none";
    console.log("error");
  }

  function getAllPosts(posts) {
    createFeed.innerHTML = "";
    if (posts) {
      posts.map((post) => {
        let date = new Date(`${post.created}`);

        createFeed.innerHTML += ` <div class="bg-white p-4 rounded shadow mt-3">
                  <div class="d-flex justify-content-between">
                    <div class="d-flex">
                      <img
                      src="${
                        post.author.avatar ? post.author.avatar : "images/M.jpg"
                      }"
                        alt=""
                        class="rounded-circle me-2"
                        style="width: 40px; height: 40px; object-fit: cover"
                      />
                      <div>
                      <a href="single-post.html?id=${
                        post.id
                      }" class="m-0 fw-bold text-decoration-none">${post.author.name.replace(
          "_",
          " "
        )}</a>
                        <div>
                        <span class="text-muted fs-7">${date.toLocaleDateString(
                          "en-US",
                          dateFormat
                        )}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="mt-3">
                    <div>
                    <p class="m-0 fw-bold">${post.title}</p>
                      <p>
                      ${post.body}
                      </p>

                      <img
                        src="${post.media}"
                        alt="pic"
                        id="post-image"
                        class="img-fluid rounded post-image"
                       />
                     <p>${post.tags}</p>

                    </div>

                    <div class="post__comment mt-3 position-relative">
                      <div class="accordion" id="accordionExample">
                        <div class="accordion-item border-0">
                          <h2 class="accordion-header" id="headingTwo">
                            <div
                              class="accordion-button collapsed pointer d-flex justify-content-end"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapsePost1"
                              aria-expanded="false"
                              aria-controls="collapsePost1"
                            >
                              <p class="m-0">${
                                post._count.comments
                              } Comments</p>
                            </div>
                          </h2>
                          <hr />

                          <div class="d-flex justify-content-around">
                            <div
                              class="dropdown-item rounded d-flex justify-content-center align-items-center pointer text-muted p-1"
                            >
                              <i class="fas fa-thumbs-up me-3"></i>
                              <p class="m-0">${post._count.reactions}</p>
                            </div>
                            <div
                              class="dropdown-item rounded d-flex justify-content-center align-items-center pointer text-muted p-1"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapsePost1"
                              aria-expanded="false"
                              aria-controls="collapsePost1"
                            >
                              <i class="fas fa-comment-alt me-3"></i>
                              <p class="m-0">${post._count.comments}</p>
                            </div>
                          </div>

                          <div
                            id="collapsePost1"
                            class="accordion-collapse collapse"
                            aria-labelledby="headingTwo"
                            data-bs-parent="#accordionExample"
                          >
                            <hr />
                            <div class="accordion-body">
                            
                              <!--------------------------- comment ----------------------->
                              <div class="d-flex align-items-center my-1">
                                <img
                                src="${avatar}"
                                  alt="avatar"
                                  class="rounded-circle me-2 avatar-image"
                                  
                                />

                                <div class="p-3 rounded comment__input w-100">
                                  <p class="fw-bold m-0"> ${name}</p>
                                  <p class="m-0 fs-7 bg-gray p-2 rounded commentPostContainer">
                                    
                                  </p>
                                </div>
                              </div>
                              <!-- create comment -->
                              <form class="d-flex my-1">
                                <div>
                                  <img
                                    src="${avatar}"
                                    alt="avatar"
                                    class="rounded-circle me-2 avatar-image"

                                  />
                                </div>
                                <!-- input -->
                                <input
                                  id="commentInput"
                                  type="text"
                                  name="comment"
                                  class="form-control border-0 rounded-pill bg-gray"
                                  placeholder="Write a comment"
                                />
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>`;
      });
    } else {
      createFeed.classList.remove("error");
    }
  }

  /**
   *uses the input value to filter the user by its title and name
   * @param {keyup} event
   */

  searchInput.addEventListener("keyup", (event) => {
    const inputValue = event.target.value.toLowerCase();

    const inputResult = data.filter((user) => {
      if (
        user.title.toLowerCase().startsWith(inputValue) ||
        user.author.name.toLowerCase().startsWith(inputValue)
      ) {
        return true;
      }
    });
    createFeed.innerHTML = getAllPosts(inputResult);

    getAllPosts(inputResult);
  });

  //filter by oldest and newest post of the 200 posts
  const filterButtonOldDate = document.querySelector("#filterButtonOldDate");

  filterButtonOldDate.addEventListener("click", (event) => {
    event.target;

    const inputResult = data.filter((user, index) => {
      if (index <= 100) {
        return true;
      }
    });
    createFeed.innerHTML = getAllPosts(inputResult);

    getAllPosts(inputResult);
  });
  // filtered by the newest post
  const filterButtonNewDate = document.querySelector("#filterButtonNewDate");

  filterButtonNewDate.addEventListener("click", (event) => {
    event.target;

    const inputResult = data.filter((user, index) => {
      if (index >= 100) {
        return true;
      }
    });
    createFeed.innerHTML = getAllPosts(inputResult);

    getAllPosts(inputResult);
  });
}

viewAllPosts();
