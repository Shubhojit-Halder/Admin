import axios from "axios";
const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OTFiODdjNWU2ZGFkM2M4YTNkMjY5NCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4NzM2NjI1MSwiZXhwIjoxNjg3NjI1NDUxfQ.pofOtXbSMMB4r5l1vdRgW721tQekQkhFcbdzQOWQYS8";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Token ${TOKEN}` },
});
