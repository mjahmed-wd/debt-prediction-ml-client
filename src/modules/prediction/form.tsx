import Dropdown from 'common/form/dropdown';
import Input from 'common/form/input';
import { Form, Formik, FormikValues } from 'formik';
import { PredictionModal } from 'modules/prediction/predictionModal';
import { useEffect, useState } from 'react';
import * as Yup from 'yup';

const initialData = {
  Address: 'Amborkhana',
  Schm_Desc: 'PERSONAL LOAN',
  Rate: 9,
  Sanct_Lim: 0,
  Method: 'KN',
};

export const predictionValidationSchema = Yup.object().shape({
  Address: Yup.number().required('Required'),
  Schm_Desc: Yup.number().required('Required'),
  Rate: Yup.number().required('Required'),
  Sanct_Lim: Yup.number().required('Required'),
});

const PredictionForm = () => {
  const [allAddress, setAllAddress] = useState<string[]>([]);
  const [allScheme, setAllScheme] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [prediction, setPrediction] = useState<{
    result: string;
    method: string;
  }>({ result: '', method: '' });

  const handleSubmit = async (values: FormikValues) => {
    try {
      const response = await fetch(
        'http://127.0.0.1:5000/predict_from_real_field',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        },
      );
      const data = await response.json();
      setPrediction(data.data);
      setIsModalOpen(true);
    } catch (error) {
      console.log(error);
    }
  };

  const getAllAddress = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/get_addresses', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      setAllAddress(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getAllScheme = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/get_schm_desc', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      setAllScheme(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllAddress();
    getAllScheme();
  }, []);

  return (
    <>
      <Formik
        enableReinitialize={true}
        initialValues={initialData}
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
        onClose={() => setIsModalOpen(false)}
      >
        {prediction.result}
      </PredictionModal>
    </>
  );
};

export default PredictionForm;
