import axios from "axios";

const baseURL =
  process.env.NODE_ENV === "production"
    ? "/"
    : "http://localhost:8800";

export default axios.create({
  baseURL,
});