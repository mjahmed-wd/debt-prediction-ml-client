import DropdownSearch from 'common/form/dropdownSearch';
import Input from 'common/form/input';
import { Form, Formik } from 'formik';
import { PredictionModal } from 'modules/prediction/predictionModal';
import {
  FIELDS,
  initialLoanQueryFormData,
  predictionValidationSchema,
} from 'modules/prediction/utils';
import { useState } from 'react';
import predictionService from 'services/prediciton';
import { PredictionMethod, PredictionPayload } from 'types/prediction';

type IPrediction = {
  result: string;
  model: string;
  algorithm_type: string;
  accuracy_score: string;
  precision_score: string;
  recall_score: string;
  f1_score: string;
  support: string;
};

const PredictionForm = () => {
  const [allGender] = useState<string[]>(['Male', 'Female']);
  const [allMaritalStatus] = useState<string[]>(['Yes', 'No']);
  const [allEducationStatus] = useState<string[]>(['Graduate', 'Not Graduate']);
  const [selectedEmploymentStatus] = useState<string[]>(['Yes', 'No']);
  const [allPropertyArea] = useState<string[]>(['Urban', 'Rural', 'Semiurban']);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [prediction, setPrediction] = useState<IPrediction[]>([]);

  const handleSubmit = async (values: PredictionPayload) => {
    try {
      const { data } = await predictionService.postPredict(values);
      setPrediction(data.data);
      setIsModalOpen(true);
    } catch (error) {
      console.log(error);
    }
  };
  const handleModalClose = () => setIsModalOpen(false);

  return (
    <>
      <Formik
        enableReinitialize={true}
        initialValues={initialLoanQueryFormData}
        validationSchema={predictionValidationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className='mt-6 grid gap-4 lg:gap-6'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6'>
              <DropdownSearch
                dropdown={allGender}
                name={FIELDS.GENDER}
                label='Gender'
              />
              <Input name={FIELDS.DEPENDENT} label='Dependant' type='number' />
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6'>
              <DropdownSearch
                dropdown={allMaritalStatus}
                name={FIELDS.MARRIED}
                label='Married'
              />
              <DropdownSearch
                dropdown={allEducationStatus}
                name={FIELDS.EDUCATION}
                label='Education'
              />
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6'>
              <DropdownSearch
                dropdown={selectedEmploymentStatus}
                name={FIELDS.SELF_EMPLOYED}
                label='Self Employed'
              />
              <Input
                name={FIELDS.APPLICANT_INCOME}
                label='Applicant Income'
                type='number'
              />
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6'>
              <Input
                name={FIELDS.CO_APPLICANT_INCOME}
                label='Co-Applicant Income'
                type='number'
              />
              <Input
                name={FIELDS.LOAN_AMOUNT}
                label='Loan Amount'
                type='number'
              />
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6'>
              <Input
                name={FIELDS.LOAN_AMOUNT_TERM}
                label='Loan Amount Term (Month)'
                type='number'
              />
              <Input
                name={FIELDS.CREDIT_HISTORY}
                label='Credit History'
                type='number'
              />
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6'>
              <DropdownSearch
                dropdown={allPropertyArea}
                name={FIELDS.PROPERTY_AREA}
                label='Property Area'
              />
              <DropdownSearch
                dropdown={[
                  PredictionMethod.KNNClassifier,
                  PredictionMethod.LogisticRegression,
                  PredictionMethod.NaiveBayes,
                  PredictionMethod.RandomForestClassifier,
                  PredictionMethod.SupportVectorClassifier,
                  PredictionMethod.RandomForestRegressor,
                ]}
                name={FIELDS.SELECTED_MODEL}
                isMultiple={true}
                label='Select Model'
              />
            </div>
          </div>

          <div className='mt-6 grid'>
            <button
              type='submit'
              className='inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-sm lg:text-base text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800'
            >
              Send Inquiry
            </button>
          </div>
        </Form>
      </Formik>
      <PredictionModal
        title='Prediction Result'
        isOpen={isModalOpen}
        onClose={handleModalClose}
      >
        <table className='min-w-full divide-y divide-gray-200'>
          <thead className='bg-gray-50'>
            <tr>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                Algorithm
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                Accuracy Score
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                Precision Score
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                Predicted result
              </th>
            </tr>
          </thead>
          <tbody className='bg-white divide-y divide-gray-200'>
            {prediction.map((item, index) => (
              <tr key={index}>
                <td className='px-6 py-4 whitespace-nowrap'>{item.model}</td>
                <td className='px-6 py-4 whitespace-nowrap'>
                  {parseFloat(item.accuracy_score).toFixed(2)}
                </td>
                <td className='px-6 py-4 whitespace-nowrap'>
                  {parseFloat(item.precision_score).toFixed(2)}
                </td>
                <td className='px-6 py-4 whitespace-nowrap'>{item.result}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </PredictionModal>
    </>
  );
};

export default PredictionForm;
