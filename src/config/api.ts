export default {
  // API_URL: 'https://debt-api-4301881a2ff8.herokuapp.com/',
  API_URL: 'http://localhost:8000/',
  endpoints: {
    index: '/',
    get_schm_desc: '/get_schm_desc',
    get_address: '/get_addresses',
    predict: 'prediction/predict',
    faq: {
      ask: 'faq/ask',
    },
  },
};
