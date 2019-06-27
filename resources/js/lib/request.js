import axios from 'axios';

axios.defaults.baseURL = '/api';
axios.defaults.headers.common = {
  Accept: 'application/json, application/xml, text/play, text/html, *.*',
  'Content-Type': 'application/json',
};

export default axios;
