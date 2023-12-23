'use client';
import { FormikValues, useFormikContext } from 'formik';
import React from 'react';
import { useState } from 'react';
import Select from 'react-tailwindcss-select';
import {
  Option,
  SelectValue,
} from 'react-tailwindcss-select/dist/components/type';

type Props = {
  dropdown: string[];
  name: string;
  label: string;
};

const DropdownSearch = (props: Props) => {
  const { label, dropdown, name } = props;
  const options: Option[] = dropdown.map((item) => ({
    value: item,
    label: item,
  }));

  const { setFieldValue } = useFormikContext<FormikValues>();
  const [value, setValue] = useState<SelectValue>({ value: '', label: '' });

  const handleChange = (value: SelectValue) => {
    setValue(value);
    if (value) {
      setFieldValue(name, (value as Option).value!);
    }
  };

  return (
    <div>
      <label
        htmlFor={label}
        className='block text-sm text-gray-700 font-medium dark:text-white'
      >
        {label}
      </label>
      <Select
        isSearchable={true}
        value={value}
        onChange={handleChange}
        options={options}
        primaryColor='black'
      />
    </div>
  );
};

export default DropdownSearch;
