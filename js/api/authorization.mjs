const getAuthentication = localStorage.getItem("user");
const bearer = "Bearer ";
export const accessToken = bearer + getAuthentication;
console.log(accessToken);
