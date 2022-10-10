import { postsApi } from "./api/fetchApi.mjs";
console.log(postsApi);
import { authFetch } from "./api/authFetch.mjs";
const createFeed = document.querySelector(".create-feeds");
const searchButton = document.querySelector("#search-button");
console.log("hihi");
let newFrameList = [];

async function searchItem() {
  const searchInput = document.querySelector("#search-input");

  console.log(searchInput.value);

  try {
    const response = await authFetch(postsApi);
    const data = await response.json();
    post = data.map((post) => {
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
                    <a href="singlePost.html?id=${
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
                      src="${post.media}
                      alt="pic"
                      id="post-image"
                      class="img-fluid rounded post-image"
                     />
  
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
                            <p class="m-0">${post._count.comments} Comments</p>
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
                            <!-------------- comment 1  ------------->
                            <div class="d-flex align-items-center my-1">
                              <img
                                src="https://source.unsplash.com/collection/happy-people"
                                alt="avatar"
                                class="rounded-circle me-2"
                                style="
                                  width: 40px;
                                  height: 40px;
                                  object-fit: cover;
                                "
                              />
                              <!-- comment text -->
                              <div class="p-3 rounded comment__input w-100">
                                <p class="fw-bold m-0">John</p>
                                <p class="m-0 fs-7 bg-gray p-2 rounded">
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit.
                                </p>
                              </div>
                            </div>
                            <!--------------------------- comment 2----------------------->
                            <div class="d-flex align-items-center my-1">
                              <img
                                src="https://source.unsplash.com/random/2"
                                alt="avatar"
                                class="rounded-circle me-2"
                                style="
                                  width: 40px;
                                  height: 40px;
                                  object-fit: cover;
                                "
                              />
  
                              <div class="p-3 rounded comment__input w-100">
                                <p class="fw-bold m-0">saba</p>
                                <p class="m-0 fs-7 bg-gray p-2 rounded">
                                  This post is increadebly good.
                                </p>
                              </div>
                            </div>
                            <!-- create comment -->
                            <form class="d-flex my-1">
                              <div>
                                <img
                                  src="https://source.unsplash.com/collection/happy-people"
                                  alt="avatar"
                                  class="rounded-circle me-2 avatar-image"
  
                                />
                              </div>
                              <!-- input -->
                              <input
                                type="text"
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
    inputControl(data);
  } catch (error) {
    console.log("error");
  }

  function inputControl(users) {
    searchInput.addEventListener("keyup", (event) => {
      const inputValue = event.currentTarget.value.toLowerCase();
      console.log(inputValue);
      console.log(newFrameList);
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
searchItem();
