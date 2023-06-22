import axios from "axios";
const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OTFiODdjNWU2ZGFkM2M4YTNkMjY5NCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4NzM4NjI5NywiZXhwIjoxNjg3NjQ1NDk3fQ.cs4ao7gAh_-K3qk0MdOHVcA6eIjftHsIfTbN2mx4bVc";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Token ${TOKEN}` },
});
