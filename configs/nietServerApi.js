const axios = require('axios');
const URL = 'https://api.niet.kz';
// https://api.niet.kz

const instance = axios.create({
  baseURL: URL
});

export default instance;
