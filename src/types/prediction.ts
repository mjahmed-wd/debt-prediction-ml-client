export enum PredictionMethod {
  'KNNClassifier' = 'KNNClassifier',
  'LogisticRegression' = 'LogisticRegression',
  'NaiveBayes' = 'NaiveBayes',
  'RandomForestClassifier' = 'RandomForestClassifier',
  'SupportVectorClassifier' = 'SupportVectorClassifier',
}

export type IPredictionField = {
  gender: string;
  married: string;
  dependents: string;
  education: string;
  self_employed: string;
  applicantIncome: string;
  coapplicant_income: string;
  loan_amount: string;
  loan_amount_term: string;
  credit_history: string;
  property_area: string;
  selected_model: PredictionMethod.KNNClassifier;
};

type IPredictionMethod = {
  selected_model: PredictionMethod;
};

export type PredictionPayload = IPredictionField & IPredictionMethod;
