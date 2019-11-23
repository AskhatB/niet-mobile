const axios = require('axios');
const USERNAME = 'test_srv_policy';
const PASSWORD = 'bP&eQTrBo&m4b#npOzbO3E';
const basicAuth =
  'Basic ' + Buffer.from(USERNAME + ':' + PASSWORD).toString('base64');

const instance = axios.create({
  baseURL: 'https://terminal.ffins.kz/insurance/api/',
  headers: {
    'Api-key':
      process.env.FFINS_KEY ||
      '881edd091a74fdd65846b33147c0bf89b2b75986027f9c8d99b29435841963c5',
    Authorization: basicAuth,
    'Content-Type': 'application/x-www-form-urlencoded',
    'Accept-Language': 'en-US,en;q=0.9,ru;q=0.8,la;q=0.7',
    'Access-Control-Allow-Headers':
      'Origin, X-Requested-With, Content-Type, Access-Control-Allow-Headers, Access-Control-Allow-Origin, Accept, Api-key, Accept-Language',
    Accept: 'application/json, text/javascript, */*; q=0.01'
  }
});

export default instance;
