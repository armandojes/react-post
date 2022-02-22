import { useState } from 'react';
import deleteObjectNullProperties from 'app/helpers/deleteObjectNullProperties';

const useForm = (config = {}) => {
  const [inputValues, setInputValues] = useState(config.initialState || {});
  const [inputsWithError, setInputsWithErrors] = useState(config.initialErrors || {});

  const updateFormValue = (inputName, inputValue) => {
    const newState = { ...inputValues, [inputName]: inputValue };
    setInputValues(deleteObjectNullProperties(newState));
  };

  const removeInputError = (inputName) => {
    const newInputErrors = { ...inputsWithError };
    delete newInputErrors[inputName];
    setInputsWithErrors(newInputErrors);
  };

  return {
    inputValues,
    inputsWithError,
    updateFormValue,
    removeInputError,
    setInputsWithErrors,
  };
};

export default useForm;
