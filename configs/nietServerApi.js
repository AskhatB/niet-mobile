const axios = require('axios');
const URL = 'https://api.niet.kz';
// 'http://localhost:5000';
// 'https://api.niet.kz'

const instance = axios.create({
  baseURL: URL
});

export default instance;
