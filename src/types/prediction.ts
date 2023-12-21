export enum PredictionMethod {
  'KNN' = 'KNN',
  'SVM' = 'SVM',
  'RandomForest' = 'RandomForest',
  'DecisionTree' = 'DecisionTree',
  'LogisticRegression' = 'LogisticRegression',
  'NaiveBayes' = 'NaiveBayes',
}

export type IPredictionField = {
  Gender: string;
  Married: string;
  Dependents: string;
  Education: string;
  Self_Employed: string;
  ApplicantIncome: number;
  CoapplicantIncome: number;
  LoanAmount: number;
  Loan_Amount_Term: number;
  Credit_History: number;
  Property_Area: string;
};

type IPredictionMethod = {
  Method: PredictionMethod;
};

export type PredictionPayload = IPredictionField & IPredictionMethod;
