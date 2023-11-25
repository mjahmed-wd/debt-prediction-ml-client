import { ErrorMessage, Field } from 'formik';
import React from 'react';

type Props = {
  name: string;
  label: string;
  type: string;
} & React.HTMLProps<HTMLInputElement>;

const Input = (props: Props) => {
  const { label, name, type, ...rest } = props;
  return (
    <div>
      <label
        htmlFor={name}
        className='block text-sm text-gray-700 font-medium dark:text-white'
      >
        {label}
      </label>
      <Field
        type={type}
        name={name}
        id={name}
        className='py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400'
        {...rest}
      />
      <ErrorMessage
        name={name}
        render={(msg) => <span className='text-red-400'>{msg}</span>}
      />
    </div>
  );
};

export default Input;
