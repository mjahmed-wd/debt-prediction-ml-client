import Dropdown from 'common/form/dropdown';
import Input from 'common/form/input';
import { Form, Formik } from 'formik';
import { PredictionModal } from 'modules/prediction/predictionModal';
import { initialLoanQueryFormData } from 'modules/prediction/utils';
import { useEffect, useState } from 'react';
import predictionService from 'services/prediciton';
import { PredictionPayload } from 'types/prediction';

const PredictionForm = () => {
  const [allAddress, setAllAddress] = useState<string[]>([]);
  const [allScheme, setAllScheme] = useState<string[]>([]);
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

  const getAllAddress = async () => {
    try {
      const { data } = await predictionService.getAllDistrict();
      setAllAddress(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getAllScheme = async () => {
    try {
      const { data } = await predictionService.getAllScheme();
      setAllScheme(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleModalClose = () => setIsModalOpen(false);

  useEffect(() => {
    getAllAddress();
    getAllScheme();
  }, []);

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
          <div className='mt-6 grid gap-4 lg:gap-6'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6'>
              <Dropdown dropdown={allAddress} name='Address' label='Address' />
              <Dropdown
                dropdown={allScheme}
                name='Schm_Desc'
                label='Scheme Description no'
              />
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6'>
              <Input name='Rate' label='Rate' type='text' />

              <Input name='Sanct_Lim' label='Sanction Limit' type='text' />
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6'>
              <Dropdown
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
