import { authFetch } from "../authFetch.mjs";
import { profileApi } from "../fetchApi.mjs";

export async function viewAllProfiles() {
  const response = await authFetch(profileApi);
  const result = await response.json();
  return result;
}

export async function viewSingleProfile(name) {
  if (!name) {
    throw new Error("get required name");
  }
  const getProfileApi = profileApi + `/${name}`;

  const response = await authFetch(getProfileApi);
  const result = await response.json();
  return result;
}
