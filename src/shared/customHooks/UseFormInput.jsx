import { useState } from 'react';

export const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  const handleChange = event => {
    // return setValue(text);
    return setValue(value => ({
      ...value,
      [event.target.name]: event.target.value
    }));
  };

  return {
    value,
    onChange: handleChange
  };
};

export const useForm = callback => {
  const [values, setValues] = useState({});

  const handleSubmit = event => {
    if (event) event.preventDefault();
    callback();
  };

  const handleChange = event => {
    event.persist();
    setValues(values => ({
      ...values,
      [event.target.name]: event.target.value
    }));
  };

  return {
    handleChange,
    handleSubmit,
    values
  };
};
