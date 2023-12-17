import CONFIG from 'config';
import { PredictionPayload } from 'types/prediction';

import client from './client';

const getAllDistrict = () =>
  client.get(CONFIG.API_CONFIG.endpoints.get_address);

const getAllAddress = () => client.get(CONFIG.API_CONFIG.endpoints.get_address);

const getAllScheme = () =>
  client.get(CONFIG.API_CONFIG.endpoints.get_schm_desc);

const postPredict = (data: PredictionPayload) =>
  client.post(CONFIG.API_CONFIG.endpoints.predict, data);

const predictionService = {
  getAllDistrict,
  getAllScheme,
  postPredict,
  getAllAddress,
};

export default predictionService;
