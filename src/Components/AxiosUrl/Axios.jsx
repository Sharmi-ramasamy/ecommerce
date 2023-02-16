import axios from "axios";
const ecomUrl = axios.create({
  baseURL: "http://localhost:4042",
});
export default ecomUrl;
