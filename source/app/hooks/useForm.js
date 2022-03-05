import { useState } from 'react';
import deleteObjectNullProperties from 'app/helpers/deleteObjectNullProperties';

const useForm = (config = {}) => {
  const [inputValues, setInputValues] = useState(config.initialState || {});
  const [inputErrors, setInputErrors] = useState(config.initialErrors || {});

  const updateFormValue = (inputName, inputValue) => {
    const newState = { ...inputValues, [inputName]: inputValue };
    setInputValues(deleteObjectNullProperties(newState));
  };

  const removeInputError = (inputName) => {
    const newInputErrors = { ...inputErrors };
    delete newInputErrors[inputName];
    setInputErrors(newInputErrors);
  };

  return {
    inputValues,
    inputErrors,
    updateFormValue,
    removeInputError,
    setInputErrors,
  };
};

export default useForm;
