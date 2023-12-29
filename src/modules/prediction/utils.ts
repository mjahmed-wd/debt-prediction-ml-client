import { PredictionMethod, PredictionPayload } from 'types/prediction';
import * as Yup from 'yup';

export const FIELDS = {
  GENDER: 'gender',
  MARRIED: 'married',
  DEPENDENT: 'dependents',
  EDUCATION: 'education',
  SELF_EMPLOYED: 'self_employed',
  APPLICANT_INCOME: 'applicantIncome',
  CO_APPLICANT_INCOME: 'coapplicant_income',
  LOAN_AMOUNT: 'loan_amount',
  LOAN_AMOUNT_TERM: 'loan_amount_term',
  CREDIT_HISTORY: 'credit_history',
  PROPERTY_AREA: 'property_area',
  SELECTED_MODEL: 'selected_model',
};
export const initialLoanQueryFormData: PredictionPayload = {
  gender: '',
  married: '',
  dependents: '',
  education: '',
  self_employed: '',
  applicantIncome: '',
  coapplicant_income: '',
  loan_amount: '',
  loan_amount_term: '',
  credit_history: '',
  property_area: '',
  selected_model: PredictionMethod.KNNClassifier,
};

export const predictionValidationSchema = Yup.object().shape({
  // Address: Yup.number().required('Required'),
  // Schm_Desc: Yup.number().required('Required'),
  // Rate: Yup.number().required('Required'),
  // Sanct_Lim: Yup.number().required('Required'),
});
