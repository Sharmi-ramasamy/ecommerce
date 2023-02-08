/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
import axios from "axios";
const ecomUrl = axios.create({
  baseURL: 'http://localhost:4042'
});
  export default ecomUrl