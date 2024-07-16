import axios from "axios";

export default axios.create({
  baseURL: "http://122.169.42.21:8086",
  headers: {
    "Content-Type": "application/json",
  },
});
