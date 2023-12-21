import DropdownSearch from 'common/form/dropdownSearch';
import Input from 'common/form/input';
import { Form, Formik } from 'formik';
import { PredictionModal } from 'modules/prediction/predictionModal';
import { initialLoanQueryFormData } from 'modules/prediction/utils';
import { useState } from 'react';
import predictionService from 'services/prediciton';
import { PredictionPayload } from 'types/prediction';

const PredictionForm = () => {
  const [allGender] = useState<string[]>(['Male', 'Female']);
  const [allMaritalStatus] = useState<string[]>(['Yes', 'No']);
  const [allEducationStatus] = useState<string[]>(['Graduate', 'Not Graduate']);
  const [selefEmploymentStatus] = useState<string[]>(['Yes', 'No']);
  const [allPropertyArea] = useState<string[]>(['Urban', 'Rural', 'Semiurban']);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [prediction, setPrediction] = useState<{
    result: string;
    method: string;
  }>({ result: '', method: '' });

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
        // validationSchema={predictionValidationSchema}
        validateOnChange={false}
        validateOnBlur={false}
        onSubmit={handleSubmit}
      >
        <Form>
          {/*Credit_History,Property_Area */}
          <div className='mt-6 grid gap-4 lg:gap-6'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6'>
              {/* <Dropdown dropdown={allAddress} name='Address' label='Address' /> */}
              <DropdownSearch
                dropdown={allGender}
                name='Gender'
                label='Gender'
              />
              <DropdownSearch
                dropdown={allMaritalStatus}
                name='Married'
                label='Married'
              />
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6'>
              <DropdownSearch
                dropdown={allEducationStatus}
                name='Education'
                label='Education'
              />
              <DropdownSearch
                dropdown={selefEmploymentStatus}
                name='Self_Employed'
                label='Self Employed'
              />
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6'>
              <Input
                name='ApplicantIncome'
                label='Applicant Income'
                type='number'
              />

              <Input
                name='CoapplicantIncome'
                label='Sanction Limit'
                type='text'
              />
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6'>
              <Input name='LoanAmount' label='Loan Amount' type='number' />

              <Input
                name='Loan_Amount_Term'
                label='Loan Amount Term '
                type='text'
              />
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6'>
              <Input
                name='Credit_History'
                label='Credit History'
                type='number'
              />
              <DropdownSearch
                dropdown={allPropertyArea}
                name='Property_Area'
                label='Property Area'
              />
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6'>
              <DropdownSearch
                dropdown={['KN', 'Random Forest']}
                name='Method'
                label='Method'
              />
            </div>
          </div>

          <div className='mt-6 grid'>
            <button
              type='submit'
              className='inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-sm lg:text-base text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800'
            >
              Send inquiry
            </button>
          </div>
        </Form>
      </Formik>
      <PredictionModal
        title='Title'
        isOpen={isModalOpen}
        onClose={handleModalClose}
      >
        {prediction.result}
      </PredictionModal>
    </>
  );
};

export default PredictionForm;
