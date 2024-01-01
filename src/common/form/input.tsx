import Label from 'common/label/label';
import { ErrorMessage, Field, FormikValues, useFormikContext } from 'formik';
import React from 'react';

type Props = {
  name: string;
  label: string;
  type: string;
} & React.HTMLProps<HTMLInputElement>;

const Input = (props: Props) => {
  const { label, name, type, ...rest } = props;
  const { touched, errors } = useFormikContext<FormikValues>();
  return (
    <div>
      <Label name={name} label={label} />
      <Field
        type={type}
        name={name}
        id={name}
        className=' text-gray-500 border border-gray-300 shadow-sm transition-all duration-300 focus:outline-none bg-white hover:border-gray-400 focus:ring focus:ring-blue-500/20 py-2 px-4 block w-full rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400'
        {...rest}
      />
      {touched[name] && errors[name] && (
        <ErrorMessage
          name={name}
          render={(msg) => <span className='text-red-400'>{msg}</span>}
        />
      )}
    </div>
  );
};

export default Input;
