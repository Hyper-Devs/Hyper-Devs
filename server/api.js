const axios = require('axios')

const baseURL =
  process.env.NODE_ENV === "production"
    ? "http://54.169.72.229:8800"
    : "http://localhost:8800";


module.exports = axios.create({
    baseURL,
});