import { accessToken as token } from "./authorization.mjs";
import { singleProfileApi as api } from "./fetchApi.mjs";
import { dateOptions as dateFormate } from "../../dateConverter.mjs";

const profileInput = document.querySelector(".profileInput");
const singleProfilePost = document.querySelector(".singleProfilePost");

//..............options............................................................//
const options = {
  headers: {
    "Content-type": "application/json; charset=UTF-8",
    Authorization: token,
  },
};
//..................................................................................//
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
console.log(id);
const url = api + id + "?_author=true&_comments=true&_reactions=true";
console.log(url);
async function getProfile() {
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
    singleProfile(data);
  } catch (error) {
    console.log("error");
  }

  function singleProfile(data) {
    const avatar1 = localStorage.getItem("user");
    let date = new Date(`${data.created}`);

    singleProfilePost.innerHTML += `<div class="bg-white p-4 rounded shadow mt-3 ">
          <div class="d-flex justify-content-between">
            <div class="d-flex ">
              <img
                src="${
                  data.author.avatar ? data.author.avatar : "images/M.jpg"
                }"
                alt="avatar"
                class="rounded-circle me-2 "
                style="width: 38px; height: 38px; object-fit: cover"
              />
              <div>
                <p class="m-0 fw-bold">${data.author.name}</p>
                <span class="text-muted fs-7">${date.toLocaleDateString(
                  "en-US",
                  dateFormate
                )}</span>
              </div>
            </div>
          </div>
          <!-- post content -->
          <div class="mt-3">
            <!-- content -->
            <div>
            <p class="m-0 fw-bold">${data.title}</p>
              <p>
              ${data.body}
              </p>
            <div >
              <img
                src="${data.media ? data.media : "images/no-image.jpg"}"
                alt="post image"
                class="img-fluid rounded "
              />
              </div>

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
                      <p class="m-0">${data._count.comments} comments</p>
                    </div>
                  </h2>
                  <hr />

                  <div class="d-flex justify-content-around">
                    <div
                      class="dropdown-item rounded d-flex justify-content-center align-items-center pointer text-muted p-1"
                    >
                      <i class="fas fa-thumbs-up me-3"></i>
                      <p class="m-0">${data._count.reactions}</p>
                    </div>
                    <div
                      class="dropdown-item rounded d-flex justify-content-center align-items-center pointer text-muted p-1"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapsePost1"
                      aria-expanded="false"
                      aria-controls="collapsePost1"
                    >
                      <i class="fas fa-comment-alt me-3"></i>
                      <p class="m-0">${data._count.comments} Comments</p>
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
                    <!-- comment 1 -->
                    <div class="d-flex align-items-center my-1">
                      <!-- avatar -->
                      <img
                        src="https://source.unsplash.com/collection/happy-people"
                        alt="avatar"
                        class="rounded-circle me-2"
                        style="
                          width: 38px;
                          height: 38px;
                          object-fit: cover;
                        "
                      />
                      <!-- comment text -->
                      <div class="p-3 rounded comment__input w-100">
                        <!-- comment menu of author -->
                        <div class="d-flex justify-content-end">
                          <!-- icon -->
                          <i
                            class="fas fa-ellipsis-h text-blue pointer"
                            id="post1CommentMenuButton"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          ></i>
                          <!-- menu -->
                          <ul
                            class="dropdown-menu border-0 shadow"
                            aria-labelledby="post1CommentMenuButton"
                          >
                            <li class="d-flex align-items-center">
                              <a
                                class="dropdown-item d-flex justify-content-around align-items-center fs-7"
                                href="#"
                              >
                                Edit Comment</a
                              >
                            </li>
                            <li class="d-flex align-items-center">
                              <a
                                class="dropdown-item d-flex justify-content-around align-items-center fs-7"
                                href="#"
                              >
                                Delete Comment</a
                              >
                            </li>
                          </ul>
                        </div>
                        <p class="fw-bold m-0">John</p>
                        <p class="m-0 fs-7 bg-gray p-2 rounded">
                          Lorem ipsum dolor sit amet, consectetur
                          adipiscing elit.
                        </p>
                      </div>
                    </div>
                    <!-- comment 2 -->
                    <div class="d-flex align-items-center my-1">
                      <!-- avatar -->
                      <img
                        src="https://source.unsplash.com/random/2"
                        alt="avatar"
                        class="rounded-circle me-2"
                        style="
                          width: 38px;
                          height: 38px;
                          object-fit: cover;
                        "
                      />
                      <!-- comment text -->
                      <div class="p-3 rounded comment__input w-100">
                        <p class="fw-bold m-0">Jerry</p>
                        <p class="m-0 fs-7 bg-gray p-2 rounded">
                          Lorem ipsum dolor sit amet, consectetur
                          adipiscing elit.
                        </p>
                      </div>
                    </div>
                    <!-- create comment -->
                    <form class="d-flex my-1">
                      <!-- avatar -->
                      <div>
                        <img
                          src="https://source.unsplash.com/collection/happy-people"
                          alt="avatar"
                          class="rounded-circle me-2"
                          style="
                            width: 38px;
                            height: 38px;
                            object-fit: cover;
                          "
                        />
                      </div>
                      <!-- input -->
                      <input
                        type="text"
                        class="form-control border-0 rounded-pill bg-gray"
                        placeholder="Write a comment"
                      />
                    </form>
                    <!-- end -->
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>`;

    // profile image innerHTML..............................................................
    profileInput.innerHTML += `
                            <div class="container ">
                                <img
                                src="${
                                  data.media ? data.media : "images/cover.jpg"
                                }"
                                class="d-block mx-auto shadow rounded"
                                style="width: 100%; height: 300px; object-fit: cover"
                                />
                            </div>

                            <div class="position-absolute top-80 start-50 translate-middle d-flex flex-column align-items-center "
                        >
                             <img
                             src="${
                               data.author.avatar
                                 ? data.author.avatar
                                 : "images/M.jpg"
                             }"
                                alt="avatar"
                                class="rounded-circle border-shadow-5 me-2"
                                 style="width: 100px; height: 100px; object-fit: cover"
                        />
                            <h3>${data.author.name.replace("_", " ")}</h3></div>
                                `;
    // }

    //cover Image..................................................................
  }
  //}
}
getProfile();
