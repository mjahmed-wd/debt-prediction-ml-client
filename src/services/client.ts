import axios from 'axios';

import CONFIG from '../config';

const apiClient = axios.create({
  baseURL: CONFIG.API_CONFIG.API_URL,
  headers: {
    'Content-type': 'application/json',
  },
});

export default apiClient;
