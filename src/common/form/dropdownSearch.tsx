'use client';
import Tooltip from 'common/form/tooltip';
import Label from 'common/label/label';
import { ErrorMessage, FormikValues, useFormikContext } from 'formik';
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
  isMultiple?: boolean;
  placeholder?: string;
};

const DropdownSearch = (props: Props) => {
  const { label, dropdown, name, placeholder, isMultiple = false } = props;
  const options: Option[] = dropdown.map((item) => ({
    value: item,
    label: item,
  }));

  const { touched, errors, setFieldValue } = useFormikContext<FormikValues>();
  const [value, setValue] = useState<SelectValue | null>(null);

  const handleChange = (value: SelectValue) => {
    setValue(value);
    if (isMultiple) {
      const values = (value as Option[])?.map((item) => item.value!);
      setFieldValue(name, values);
    } else {
      setFieldValue(name, (value as Option).value!);
    }
  };

  return (
    <div>
      <div className='flex justify-between'>
        <Label name={name} label={label} />
        {placeholder && <Tooltip placeholder={placeholder} />}
      </div>
      <Select
        isSearchable={true}
        value={value}
        onChange={handleChange}
        options={options}
        primaryColor='black'
        isMultiple={isMultiple}
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

export default DropdownSearch;
