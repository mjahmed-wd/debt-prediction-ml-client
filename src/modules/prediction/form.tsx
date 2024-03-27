/* eslint-disable @next/next/inline-script-id */
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
  const [allDependentList] = useState<string[]>(['0', '1', '2', '3', '3+']);
  const [allEducationStatus] = useState<string[]>(['Graduate', 'Not Graduate']);
  const [selectedEmploymentStatus] = useState<string[]>(['Yes', 'No']);
  const [allPropertyArea] = useState<string[]>(['Urban', 'Rural', 'Semiurban']);
  const [hsCheckboxDelete, setHsCheckboxDelete] = useState<boolean>(false);
  const [additionalConfiguration, setAdditionalConfiguration] =
    useState<boolean>(false);
  const [allCreditHistory] = useState<string[]>([
    'Satisfactory',
    'Not Satisfactory',
  ]);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [prediction, setPrediction] = useState<IPrediction[]>([]);

  const handleSubmit = async (values: PredictionPayload) => {
    try {
      const modifiedValues = {
        ...values,
        coapplicant_income: hsCheckboxDelete ? values?.coapplicant_income : 0,
        loan_amount: (parseInt(values?.loan_amount) / 1000).toString(),
        // loan_amount_term:
        //   values?.loan_amount_term === '12'
        //     ? 360
        //     : values?.loan_amount_term === '9'
        //       ? 180
        //       : 120, //converted into days
        credit_history: values.credit_history === 'Satisfactory' ? 1 : 0,
      };
      console.log(modifiedValues, values);
      const { data } = await predictionService.postPredict(modifiedValues);
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
        {({ setFieldValue }) => (
          <Form>
            <div className='mt-6 grid gap-4 lg:gap-6'>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6'>
                <DropdownSearch
                  dropdown={allGender}
                  name={FIELDS.GENDER}
                  label='Gender'
                  placeholder='Enter gender'
                />
                <DropdownSearch
                  dropdown={allMaritalStatus}
                  name={FIELDS.MARRIED}
                  label='Married'
                  placeholder='Enter marital status'
                />
              </div>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6'>
                <DropdownSearch
                  dropdown={allDependentList}
                  name={FIELDS.DEPENDENT}
                  label='Dependant'
                  placeholder='Enter number of dependant'
                />
                <DropdownSearch
                  dropdown={allEducationStatus}
                  name={FIELDS.EDUCATION}
                  label='Education'
                  placeholder='Enter educational qualification'
                />
              </div>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6'>
                <DropdownSearch
                  dropdown={selectedEmploymentStatus}
                  name={FIELDS.SELF_EMPLOYED}
                  label='Self Employed'
                  placeholder='Enter employment status'
                />
                <Input
                  name={FIELDS.APPLICANT_INCOME}
                  label='Applicant Income (Monthly)'
                  type='number'
                  placeholder='Enter applicant income'
                />
              </div>

              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6'>
                <div className='grid space-y-3'>
                  <div className='relative flex items-start'>
                    <div className='flex items-center h-5 mt-1'>
                      <input
                        type='checkbox'
                        id='hs-checkbox-delete'
                        checked={hsCheckboxDelete}
                        onChange={() => setHsCheckboxDelete(!hsCheckboxDelete)}
                        className='border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800'
                        aria-describedby='hs-checkbox-delete-description'
                      />
                    </div>
                    <label htmlFor='hs-checkbox-delete' className='ms-3'>
                      <span className='block text-sm font-semibold text-gray-800 dark:text-gray-300'>
                        Co-Applicant
                      </span>
                      <span
                        id='hs-checkbox-delete-description'
                        className='block text-sm text-gray-600 dark:text-gray-500'
                      >
                        (Optional)
                      </span>
                    </label>
                  </div>
                </div>
                {hsCheckboxDelete === true && (
                  <Input
                    name={FIELDS.CO_APPLICANT_INCOME}
                    label='Co-Applicant Income (Monthly)'
                    type='number'
                    onBlur={(e) => {
                      if (e.target.value === '') {
                        setHsCheckboxDelete(false);
                        setFieldValue(FIELDS.CO_APPLICANT_INCOME, 0, true);
                      }
                    }}
                    placeholder='Enter co-applicant income'
                  />
                )}
              </div>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6'>
                <Input
                  name={FIELDS.LOAN_AMOUNT}
                  label='Loan Amount'
                  type='number'
                  placeholder='In Actual'
                />
                <Input
                  name={FIELDS.LOAN_AMOUNT_TERM}
                  label='Loan Amount Term (Month)'
                  type='number'
                  placeholder='In months, minimum 4 months, maximum 480 months'
                />
                <DropdownSearch
                  dropdown={allCreditHistory}
                  name={FIELDS.CREDIT_HISTORY}
                  label='Credit History'
                  placeholder='Enter users previous credit history'
                />
                <DropdownSearch
                  dropdown={allPropertyArea}
                  name={FIELDS.PROPERTY_AREA}
                  label='Property Area'
                  placeholder='Where is supporting property located?'
                />
              </div>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6'>
                <div className='grid space-y-3'>
                  <div className='relative flex items-start'>
                    <div className='flex items-center h-5 mt-1'>
                      <input
                        type='checkbox'
                        id='hs-additional-configuration'
                        checked={additionalConfiguration}
                        onChange={() =>
                          setAdditionalConfiguration(!additionalConfiguration)
                        }
                        className='border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800'
                        aria-describedby='hs-additional-configuration-description'
                      />
                    </div>
                    <label
                      htmlFor='hs-additional-configuration'
                      className='ms-3'
                    >
                      <span className='block text-sm font-semibold text-gray-800 dark:text-gray-300'>
                        Additional Configuration
                      </span>
                      <span
                        id='hs-additional-configuration-description'
                        className='block text-sm text-gray-600 dark:text-gray-500'
                      >
                        (Optional)
                      </span>
                    </label>
                  </div>
                </div>
                {additionalConfiguration === true && (
                  <DropdownSearch
                    dropdown={[
                      PredictionMethod.KNNClassifier,
                      // PredictionMethod.LogisticRegression,
                      // PredictionMethod.NaiveBayes,
                      PredictionMethod.RandomForestClassifier,
                      // PredictionMethod.SupportVectorClassifier,
                      // PredictionMethod.RandomForestRegressor,
                    ]}
                    placeholder='Select Model'
                    name={FIELDS.SELECTED_MODEL}
                    isMultiple={true}
                    label='Select Model'
                  />
                )}
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
        )}
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
