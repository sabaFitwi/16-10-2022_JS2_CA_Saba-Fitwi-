import { authFetch } from "../authFetch.mjs";
import { postsApi } from "../fetchApi.mjs";
//import { load } from "../localStorage.mjs";
import { dateOptions as dateFormate } from "../../component/dateConverter.mjs";
import { setUpdate, update } from "../posts/update.mjs";

const profileInput = document.querySelector(".profileInput");
const singlePost = document.querySelector(".singleProfile");
const form = document.querySelector("#updatePost");
//..................................................................................//
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
console.log(id);
//setUpdate(id);
export async function getSinglePost() {
  try {
    const getPostApi =
      postsApi + `/${id}` + "?_author=true&_comments=true&_reactions=true";
    console.log(getPostApi);
    const response = await authFetch(getPostApi);
    const data = await response.json();

    console.log(data);

    singleProfile(data);
  } catch (error) {
    console.log("error");
  }

  function singleProfile(result) {
    let date = new Date(`${result.created}`);

    singlePost.innerHTML += `<div class="bg-white p-4 rounded shadow mt-3 ">
          <div class="d-flex justify-content-between">
          
            <div class="d-flex ">
              <img
                src="${result.author.avatar}"
                alt="avatar"
                class="rounded-circle me-2 "
                style="width: 38px; height: 38px; object-fit: cover"
              />
              <div>
              <a href="singleProfile.html?id=${
                result.id
              }" class="m-0 fw-bold text-decoration-none">${result.author.name.replace(
      "_",
      " "
    )}</a>
                <span class="text-muted fs-7">${date.toLocaleDateString(
                  "en-US",
                  dateFormate
                )}</span>
              </div>
            </div><div class="d-flex justify-content-end">
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
                  Edit profile</a
                >
              </li>
              <li class="d-flex align-items-center">
                <a
                  class="dropdown-item d-flex justify-content-around align-items-center fs-7"
                  href="#"
                >
                  Delete profile</a
                >
              </li>
            </ul>
          </div>
          </div>
          <!-- post content -->
          <div class="mt-3">
            <!-- content -->
            <div>
            <p class="m-0 fw-bold">${result.title}</p>
              <p>
              ${result.body}
              </p>
            <div >
              <img
                src="${result.media ? result.media : "images/no-image.jpg"}"
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
                      <p class="m-0">${result._count.comments} comments</p>
                    </div>
                  </h2>
                  <hr />

                  <div class="d-flex justify-content-around">
                    <div
                      class="dropdown-item rounded d-flex justify-content-center align-items-center pointer text-muted p-1"
                    >
                      <i class="fas fa-thumbs-up me-3"></i>
                      <p class="m-0">${result._count.reactions}</p>
                    </div>
                    <div
                      class="dropdown-item rounded d-flex justify-content-center align-items-center pointer text-muted p-1"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapsePost1"
                      aria-expanded="false"
                      aria-controls="collapsePost1"
                    >
                      <i class="fas fa-comment-alt me-3"></i>
                      <p class="m-0">${result._count.comments} Comments</p>
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
                                  result.media
                                    ? result.media
                                    : "images/cover.jpg"
                                }"
                                class="d-block mx-auto shadow rounded"
                                style="width: 100%; height: 300px; object-fit: cover"
                                />
                            </div>

                            <div class="position-absolute top-80 start-50 translate-middle d-flex flex-column align-items-center "
                        >
                             <img
                             src="${
                               result.author.avatar
                                 ? result.author.avatar
                                 : "images/M.jpg"
                             }"
                                alt="avatar"
                                class="rounded-circle border-shadow-5 me-2"
                                 style="width: 100px; height: 100px; object-fit: cover"
                        />
                            <h3>${result.author.name.replace(
                              "_",
                              " "
                            )}</h3></div>
                                `;
  }
}

getSinglePost();
