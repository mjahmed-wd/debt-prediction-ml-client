import { ErrorMessage, Field, Form, Formik, FormikValues } from 'formik';
import * as Yup from 'yup';

type Props = object;

const initialData = {
  Address: 1,
  Schm_Desc: 1,
  Rate: 9,
  Sanct_Lim: 0,
};

export const predictionValidationSchema = Yup.object().shape({
  Address: Yup.number().required('Required'),
  Schm_Desc: Yup.number().required('Required'),
  Rate: Yup.number().required('Required'),
  Sanct_Lim: Yup.number().required('Required'),
});

const PredictionForm = (props: Props) => {
  const handleSubmit = async (values: FormikValues) => {
    try {
      const response = await fetch('http://0.0.0.0:12345/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Formik
        enableReinitialize={true}
        initialValues={initialData}
        validationSchema={predictionValidationSchema}
        validateOnChange={false}
        validateOnBlur={false}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className='mt-6 grid gap-4 lg:gap-6'>
            {/* <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6'>
              <div>
                <label
                  htmlFor='hs-firstname-hire-us-1'
                  className='block text-sm text-gray-700 font-medium dark:text-white'
                >
                  First Name
                </label>
                <input
                  type='text'
                  name='hs-firstname-hire-us-1'
                  id='hs-firstname-hire-us-1'
                  className='py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400'
                />
              </div>

              <div>
                <label
                  htmlFor='hs-lastname-hire-us-1'
                  className='block text-sm text-gray-700 font-medium dark:text-white'
                >
                  Last Name
                </label>
                <input
                  type='text'
                  name='hs-lastname-hire-us-1'
                  id='hs-lastname-hire-us-1'
                  className='py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400'
                />
              </div>
            </div> */}

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6'>
              <div>
                <label
                  htmlFor='Address'
                  className='block text-sm text-gray-700 font-medium dark:text-white'
                >
                  Address no
                </label>
                <Field
                  type='number'
                  name='Address'
                  id='Address'
                  className='py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400'
                />
                <ErrorMessage
                  name='Address'
                  render={(msg) => <span className='text-red-400'>{msg}</span>}
                />
              </div>

              <div>
                <label
                  htmlFor='Rate'
                  className='block text-sm text-gray-700 font-medium dark:text-white'
                >
                  Loan Rate (%)
                </label>
                <Field
                  type='text'
                  name='Rate'
                  id='Rate'
                  className='py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400'
                />
                <ErrorMessage
                  name='Rate'
                  render={(msg) => <span className='text-red-400'>{msg}</span>}
                />
              </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6'>
              <div>
                <label
                  htmlFor='Schm_Desc'
                  className='block text-sm text-gray-700 font-medium dark:text-white'
                >
                  Scheme Description no
                </label>
                <Field
                  type='number'
                  name='Schm_Desc'
                  id='Schm_Desc'
                  className='py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400'
                />
                <ErrorMessage
                  name='Schm_Desc'
                  render={(msg) => <span className='text-red-400'>{msg}</span>}
                />
              </div>

              <div>
                <label
                  htmlFor='Sanct_Lim'
                  className='block text-sm text-gray-700 font-medium dark:text-white'
                >
                  Sanction Limit
                </label>
                <Field
                  type='text'
                  name='Sanct_Lim'
                  id='Sanct_Lim'
                  className='py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400'
                />
                <ErrorMessage
                  name='Sanct_Lim'
                  render={(msg) => <span className='text-red-400'>{msg}</span>}
                />
              </div>
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
    </>
  );
};

export default PredictionForm;
