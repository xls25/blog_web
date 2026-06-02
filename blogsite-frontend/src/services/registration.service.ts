import axios from "axios";
import type { PostNewUser } from "../types/user-reg-type.ts";

const api = axios.create({
  baseURL: "http://localhost:3000/api/auth/",
  timeout: 3000,
});

export async function postNewUser(newUser: PostNewUser) {
  const res = await api.post("reg", newUser);

  return res.data;
}