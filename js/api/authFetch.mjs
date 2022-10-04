import { load } from "./localStorage.mjs";
export function headers() {
  const token = load("token");
  return {
    "Content-type": "application/json; charset=UTF-8",
    Authorization: `Bearer ${token}`,
  };
}

export async function authFetch(url, options) {
  return fetch(url, { ...options, headers: headers() });
}
