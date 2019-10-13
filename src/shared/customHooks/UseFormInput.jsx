import { useState } from 'react';

export const useFormInput = callback => {
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

export const useBoolean = initialBoolean => {
  const [boolean, setBoolean] = useState(initialBoolean);

  const handleUpdate = _boolean => setBoolean(_boolean);

  return {
    value: boolean,
    updateBoolean: handleUpdate
  };
};
