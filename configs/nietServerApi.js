const axios = require('axios');
const URL = process.env.NODE_ENV === 'production' ? 'prod' : 'localhost:5000';

const instance = axios.create({
  baseURL: URL
});

export default instance;
