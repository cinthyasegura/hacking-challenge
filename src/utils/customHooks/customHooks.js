import { useState } from 'react';

export const useSubmitFormInput = callback => {
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

  const handleUpdate = boolean => setBoolean(boolean);

  return {
    value: boolean,
    updateBoolean: handleUpdate
  };
};

export const useTargetValueFormInput = () => {
  const [values, setValues] = useState({});

  const handleChange = event => {
    event.persist();
    setValues(values => ({
      ...values,
      [event.target.name]: event.target.value
    }));
  };

  return {
    handleChange,
    values
  };
};
