import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_LOCAL_URL;

export const api = axios.create({
  baseURL,
});
