import axios from "axios";

const host = new URL(window.location.href).host;

export default axios.create({
  baseURL:
    host === "localhost"
      ? "http://localhost:4000/api"
      : "https://api.desquare.net/api",
  headers: {
    "Content-type": "application/json",
  },
});
