import axios from 'axios';

const BASE_API_ENDPOINT = "/api/"; 
export default axios.create({
  baseURL: BASE_API_ENDPOINT
});