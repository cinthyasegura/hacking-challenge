import validate from 'validate.js';

export const validation = (fields, constraints, formErrors) => {
  const errors = validate(fields, constraints);
  if (errors !== undefined) {
    const temp = formErrors;
    for (const key of Object.keys(temp)) {
      temp[key] = '';
    }
    for (const key of Object.keys(errors)) {
      temp[key] = errors[key][0];
    }
  }
  return errors;
};
