import { ErrorMessage, FormikValues, useFormikContext } from 'formik';
import React from 'react';

type Props = {
  dropdown: string[];
  name: string;
  label: string;
};

const Dropdown = (props: Props) => {
  const { dropdown, name, label } = props;
  const { values, setFieldValue } = useFormikContext<FormikValues>();
  return (
    <div>
      <label
        htmlFor={label}
        className='block text-sm text-gray-700 font-medium dark:text-white'
      >
        {label}
      </label>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6'>
        <div className='hs-dropdown relative inline-flex'>
          <button
            id='hs-dropdown-default'
            type='button'
            className='hs-dropdown-toggle py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
          >
            {values[name] || 'Select' + label}
            <svg
              className='hs-dropdown-open:rotate-180 w-4 h-4'
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path d='m6 9 6 6 6-6' />
            </svg>
          </button>
          {/* <Field as='select' name='color'>
            {address.map((address) => (
              <option
                value={address}
                key={address}
                className='flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700'
              >
                {address}
              </option>
            ))}
          </Field> */}
          <div
            className='hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-[15rem] bg-white shadow-md rounded-lg p-2 mt-2 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full'
            aria-labelledby='hs-dropdown-default'
          >
            {dropdown.map((selectedValue) => (
              <span
                key={selectedValue}
                onClick={() => setFieldValue(name, selectedValue)}
                className='flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700'
              >
                {selectedValue}
              </span>
            ))}
          </div>
        </div>
      </div>
      <ErrorMessage
        name={name}
        render={(msg) => <span className='text-red-400'>{msg}</span>}
      />
    </div>
  );
};

export default Dropdown;
