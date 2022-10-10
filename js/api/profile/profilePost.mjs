import { authFetch } from "../authFetch.mjs";

import { profileApi } from "../fetchApi.mjs";
import { dateOptions as dateFormate } from "../../component/dateConverter.mjs";
import { load } from "../localStorage.mjs";

const profileInput = document.querySelector(".profileInput");
const profileFeed = document.querySelector(".profileFeed");

//..................................................................................//
export async function getProfile() {
  const { avatar, name } = load("user");
  try {
    const response = await authFetch(
      profileApi + `/${name}` + "?_posts=true&_following=true&_followers=true"
    );
    const data = await response.json();

    console.log(data);
    myProfile(data.posts);
  } catch (error) {
    console.log("error");
  }

  function myProfile(results) {
    if (results) {
      //profile feed innerHTML..........................................................................

      results.map((result) => {
        let date = new Date(`${result.created}`);

        profileFeed.innerHTML += `<div class="bg-white p-4 rounded shadow mt-3 ">
          <div class="d-flex justify-content-between">
            <div class="d-flex ">
              <img
              src="${avatar ? avatar : "images/M.jpg"}"
                alt="avatar"
                class="rounded-circle me-2 "
                style="width: 38px; height: 38px; object-fit: cover"
              />
              <div>
              <a href="singleProfile.html?id=${
                result.id
              }" class="m-0 fw-bold text-decoration-none">${name.replace(
          "_",
          " "
        )}</a>
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
             <p class="m-0 fw-bold">${result.title}</p>
              <p>
              ${result.body}
              </p>
            <div >
              <img
                src= "${result.media}"
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
                      <p class="m-0">0 followers</p>
                    </div>
                  </h2>
                  <hr />

                  <div class="d-flex justify-content-around">
                    <div
                      class="dropdown-item rounded d-flex justify-content-center align-items-center pointer text-muted p-1"
                    >
                      <i class="fas fa-thumbs-up me-3"></i>
                      <p class="m-0">Like</p>
                    </div>
                    <div
                      class="dropdown-item rounded d-flex justify-content-center align-items-center pointer text-muted p-1"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapsePost1"
                      aria-expanded="false"
                      aria-controls="collapsePost1"
                    >
                      <i class="fas fa-comment-alt me-3"></i>
                      <p class="m-0">0 followers</p>
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
                        class="rounded-circle me-2 avatar-image"

                      />
                      <!-- comment text -->
                      <div class="p-3 rounded comment__input w-100">
                        <!-- comment menu of author -->
                        
                        <p class="fw-bold m-0">John</p>
                        <p class="m-0 fs-7 bg-gray p-2 rounded">
                          Lorem ipsum dolor sit amet, consectetur
                          adipiscing elit.
                        </p>
                      </div>
                    </div>
                    <!-- comment 2 -->

                    <!-- create comment -->
                    <form class="d-flex my-1">
                      <!-- avatar -->
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
                    <!-- end -->
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>`;
      });

      // profile image innerHTML..............................................................
      profileInput.innerHTML += `
         <div> <img
          src="${avatar}"
          alt="avatar"
          class="rounded-circle me-2"
          style="width: 100px; height: 100px; object-fit: cover"
        />
        <h3>${name.replace("_", " ")}</h3>
         </div> `;
    }
  }
}

getProfile();
