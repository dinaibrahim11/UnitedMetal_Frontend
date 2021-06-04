import axios from 'axios';

//const BASE_API_ENDPOINT = "/api/";
//const BASE_API_ENDPOINT = "http://localhost:3000/"; // TODO: to be changed
const BASE_API_ENDPOINT = "http://localhost:7000/"; // TODO: to be changed
//const BASE_API_ENDPOINT = "https://fake-server-appv2.herokuapp.com/";
export default axios.create({
  baseURL: BASE_API_ENDPOINT
});