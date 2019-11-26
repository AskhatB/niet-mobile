const axios = require('axios');
const URL = 'http://127.0.0.1:5000';

const instance = axios.create({
  baseURL: URL
});

export default instance;
