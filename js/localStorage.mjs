const getAuthentication = localStorage.getItem("update");
const bearer = "Bearer ";
const accessToken = bearer + getAuthentication.slice(1, -1);
console.log(accessToken);

export const options = {
  headers: {
    "Content-type": "application/json; charset=UTF-8",
    Authorization: accessToken,
  },
};
