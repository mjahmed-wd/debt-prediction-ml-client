import React from 'react';

type Props = {
  name: string;
  label: string;
};

const Label = (props: Props) => {
  const { label, name } = props;
  return (
    <label
      htmlFor={name}
      className='block text-sm text-gray-700 font-medium dark:text-white'
    >
      {label}
    </label>
  );
};

export default Label;
