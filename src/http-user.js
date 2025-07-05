import axios from "axios";

export default axios.create({
  baseURL: "http://122.170.253.121:8088",
  headers: {
    "Content-Type": "application/json",
  },
});
