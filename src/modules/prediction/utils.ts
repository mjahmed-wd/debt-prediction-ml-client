import { PredictionMethod, PredictionPayload } from 'types/prediction';
import * as Yup from 'yup';

export const initialLoanQueryFormData: PredictionPayload = {
  Address: 'Amborkhana',
  Schm_Desc: 'PERSONAL LOAN',
  Rate: 9,
  Sanct_Lim: 0,
  Method: PredictionMethod.KNN,
};

export const predictionValidationSchema = Yup.object().shape({
  Address: Yup.number().required('Required'),
  Schm_Desc: Yup.number().required('Required'),
  Rate: Yup.number().required('Required'),
  Sanct_Lim: Yup.number().required('Required'),
});
