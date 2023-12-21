import { PredictionMethod, PredictionPayload } from 'types/prediction';
import * as Yup from 'yup';

export const initialLoanQueryFormData: PredictionPayload = {
  Gender: '',
  Married: '',
  Dependents: '',
  Education: '',
  Self_Employed: '',
  ApplicantIncome: 0,
  CoapplicantIncome: 0,
  LoanAmount: 0,
  Loan_Amount_Term: 0,
  Credit_History: 0,
  Property_Area: '',
  Method: PredictionMethod.KNN,
};

export const predictionValidationSchema = Yup.object().shape({
  // Address: Yup.number().required('Required'),
  // Schm_Desc: Yup.number().required('Required'),
  // Rate: Yup.number().required('Required'),
  // Sanct_Lim: Yup.number().required('Required'),
});
