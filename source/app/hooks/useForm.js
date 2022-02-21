/* eslint-disable no-unused-vars */
import { useState } from 'react';
import deleteObjectNullProperties from 'app/helpers/deleteObjectNullProperties';

const useForm = (config = {}) => {
  const [inputValues, setInputValues] = useState(config.initialState || {});
  const [inputsWithError, setInputsWithErrors] = useState(config.initialErrors || {});

  const updateFormValue = (inputName, inputValue) => {
    const newState = { ...inputValues, [inputName]: inputValue };
    setInputValues(deleteObjectNullProperties(newState));
  };

  const validate = (scopedRules) => {
    const rulesToApply = scopedRules || config.rules;
    const initialErrors = {};
    const errors = Object.keys(rulesToApply).reduce((accumulator, keyname) => {
      const currentValidator = rulesToApply[keyname];
      const currentValue = inputValues[keyname];
      const currentError = currentValidator(currentValue);
      return currentError ? { ...accumulator, [keyname]: currentError } : accumulator;
    }, initialErrors);
    setInputsWithErrors(deleteObjectNullProperties(errors));
    return {
      hasError: initialErrors === errors,
      firstErrorMessage: Object.values(errors)[0] || null,
      inputsWithError: errors,
    };
  };

  const removeInputError = (errorName) => {
    const newInputErrors = { ...inputsWithError };
    delete newInputErrors[errorName];
    setInputsWithErrors(newInputErrors);
  };

  return {
    inputValues,
    inputsWithError,
    updateFormValue,
    validate,
    removeInputError,
  };
};

export default useForm;
