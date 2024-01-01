'use client';
import Label from 'common/label/label';
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
  isMultiple?: boolean;
};

const DropdownSearch = (props: Props) => {
  const { label, dropdown, name, isMultiple = false } = props;
  const options: Option[] = dropdown.map((item) => ({
    value: item,
    label: item,
  }));

  const { setFieldValue } = useFormikContext<FormikValues>();
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
      <Label name={name} label={label} />
      <Select
        isSearchable={true}
        value={value}
        onChange={handleChange}
        options={options}
        primaryColor='black'
        isMultiple={isMultiple}
      />
    </div>
  );
};

export default DropdownSearch;
