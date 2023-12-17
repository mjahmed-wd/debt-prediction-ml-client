export enum PredictionMethod {
  'KNN' = 'KNN',
  'SVM' = 'SVM',
  'RandomForest' = 'RandomForest',
  'DecisionTree' = 'DecisionTree',
  'LogisticRegression' = 'LogisticRegression',
  'NaiveBayes' = 'NaiveBayes',
}

export type IPredictionField = {
  Address: string;
  Schm_Desc: string;
  Rate: number;
  Sanct_Lim: number;
};

type IPredictionMethod = {
  Method: PredictionMethod;
};

export type PredictionPayload = IPredictionField & IPredictionMethod;
