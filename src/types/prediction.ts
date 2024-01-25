export enum PredictionMethod {
  'DecisionTreeClassifier' = 'DecisionTreeClassifier',
  'KNNClassifier' = 'KNNClassifier',
  'LogisticRegression' = 'LogisticRegression',
  'NaiveBayes' = 'NaiveBayes',
  'RandomForestClassifier' = 'RandomForestClassifier',
  'SupportVectorClassifier' = 'SupportVectorClassifier',
  'RandomForestRegressor' = 'RandomForestRegressor',
}

export type IPredictionField = {
  gender: string;
  married: string;
  dependents: string;
  education: string;
  self_employed: string;
  applicantIncome: string;
  coapplicant_income: number;
  loan_amount: string;
  loan_amount_term: string | number;
  credit_history: string | number;
  property_area: string;
};

type IPredictionMethod = {
  selected_model: PredictionMethod[];
};

export type PredictionPayload = IPredictionField & IPredictionMethod;
