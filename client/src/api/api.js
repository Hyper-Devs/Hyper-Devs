import axios from "axios";

// const baseURL = "http://54.169.72.229:8800";
const baseURL = process.env.NODE_ENV === "production"
    ? "http://54.169.72.229:8800"
    : "http://localhost:8800";
  // process.env.NODE_ENV === "production"
  //   ? "http://54.169.72.229:8800"
  //   : "http://localhost:8800";

export default axios.create({
  baseURL,
});