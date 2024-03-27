import CONFIG from 'config';

import client from './client';

const postQuestion = (data: string) =>
  client.post(CONFIG.API_CONFIG.endpoints.faq.ask, data);

const chatService = {
  postQuestion,
};

export default chatService;
