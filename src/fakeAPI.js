import axios from 'axios';

const BASE_API_ENDPOINT = "http://localhost:3000/"; // TODO: to be changed
export default axios.create({
  baseURL: BASE_API_ENDPOINT
});