import { social_API_URL as API } from "./api/constants.mjs";

export const postsApi =
  API + "/posts?_author=true&_comments=true&reactions=true";

export const updatePostApi = API + "/posts/87";
export const singleProfileApi = API + "/posts/";

export const profileApi =
  API + "/profiles/saba_samuel?_posts=true&_following=true&_followers=true";

export const logInApi = API + "/auth/login";

export const registerApi = API + "/auth/register";
export const putProfileAPi = API + "/profiles/saba_samuel/media";
