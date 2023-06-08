const axios = require('axios')

const baseURL =
  process.env.NODE_ENV === "production"
    ? "/"
    : "http://localhost:8800";


module.exports = axios.create({
    baseURL,
});