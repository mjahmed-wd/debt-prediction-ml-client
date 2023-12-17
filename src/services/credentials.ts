import client from './client';

const getAllCredentials = () => client.get('/credentials');

const credentialService = {
  getAllCredentials,
};

export default credentialService;
