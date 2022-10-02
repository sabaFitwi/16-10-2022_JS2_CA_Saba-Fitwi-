const getAuthentication = localStorage.getItem("update");
const bearer = "Bearer ";
export const accessToken = bearer + getAuthentication;
console.log(accessToken);
