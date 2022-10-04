// import { setSignupListener } from "./api/handler/admin/register.mjs";
//import { setLoginListener } from "./api/handler/admin/login.mjs";
//import { createPost } from "./posts/createPost.mjs";
//import { update } from "./posts/update.mjs";

import * as post from "./posts/index.mjs";

//setSignupListener();

// const path = location.pathname;
// if (path === "/Login.html") {
//   setLoginListener();
// } else if (path === "/register.html") {
//   setSignupListener();
// }
// createPost({
//   title: "title1111",
//   body: "body title11111",
// });
//update({ id: 438, title: "title update for 438", body: "body update for 438" });
//post.createPost();
//post.update();
post.viewSinglePost(438).then(console.log);
//post.viewAllPosts().then(console.log);
//post.removePost();
