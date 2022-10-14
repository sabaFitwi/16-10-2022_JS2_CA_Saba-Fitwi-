import { social_API_URL as API } from "./constants.mjs";

export const postsApi = API + "/posts";
// export const createPostApi = API + "/posts";
export const updatePostApi = API + "/posts/";
// export const singleProfileApi = API + "/posts/";

export const profileApi = API + "/profiles";
export const profileUrl =
  API + "/profiles/saba_samuel?_posts=true&_following=true&_followers=true";
export const logInApi = API + "/auth/login";

export const registerApi = API + "/auth/register";
export const putProfileAPi = API + "/profiles/saba_samuel/media";
