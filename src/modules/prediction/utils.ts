import { PredictionMethod, PredictionPayload } from 'types/prediction';
import * as Yup from 'yup';

export const FIELDS = {
  GENDER: 'gender',
  MARRIED: 'married',
  DEPENDENT: 'dependents',
  EDUCATION: 'education',
  SELF_EMPLOYED: 'self_employed',
  APPLICANT_INCOME: 'applicantIncome',
  HS_CHECKBOX_DELETE: 'hsCheckboxDelete',
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
  selected_model: [PredictionMethod.RandomForestClassifier],
};

export const predictionValidationSchema = Yup.object().shape({
  [FIELDS.GENDER]: Yup.string()
    .oneOf(['Male', 'Female'], 'Invalid gender')
    .required('Gender is required'),
  [FIELDS.MARRIED]: Yup.string().required('Marital status is required'),
  [FIELDS.DEPENDENT]: Yup.string().required('Number of dependents is required'),
  [FIELDS.EDUCATION]: Yup.string().required('Education level is required'),
  [FIELDS.SELF_EMPLOYED]: Yup.string().required(
    'Employment status is required',
  ),
  [FIELDS.APPLICANT_INCOME]: Yup.number()
    .min(0, 'Applicant income cannot be negative')
    .max(15000, 'We are approving loans for low income people only')
    .typeError('Applicant income must be a number')
    .required('Applicant income is required'),
  [FIELDS.CO_APPLICANT_INCOME]: Yup.string()
    .min(0, 'Co-applicant income cannot be negative')
    .max(15000, 'We are approving loans for low income people only')
    .typeError('Co-applicant income must be a number')
    .nullable(),
  // .required('Co-applicant income is required')
  [FIELDS.LOAN_AMOUNT]: Yup.number()
    .min(0, 'Loan amount cannot be negative')
    .typeError('Loan amount must be a number')
    .required('Loan amount is required'),
  [FIELDS.LOAN_AMOUNT_TERM]: Yup.number()
    .min(0, 'Loan amount term cannot be negative')
    .required('Loan amount term is required'),
  [FIELDS.CREDIT_HISTORY]: Yup.string().required('Credit history is required'),
  [FIELDS.PROPERTY_AREA]: Yup.string().required('Property area is required'),
  [FIELDS.SELECTED_MODEL]: Yup.array()
    .of(Yup.string())
    .min(1, 'Please select at least one model')
    .required('Selected model is required'),
});
