import { setSignupListener } from "./api/handler/admin/register.mjs";
import { setLoginListener } from "./api/handler/admin/login.mjs";
setSignupListener();

const path = location.pathname;
if (path === "/Login.html") {
  setLoginListener();
} else if (path === "/register.html") {
  setSignupListener();
}
