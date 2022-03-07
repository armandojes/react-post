import { useState } from 'react';

const useInputsError = (config = {}) => {
  const [inputErrors, setInputErrors] = useState(config.initialErrors || {});

  const removeInputError = (inputName) => {
    const newInputErrors = { ...inputErrors };
    delete newInputErrors[inputName];
    setInputErrors(newInputErrors);
  };

  return {
    inputErrors,
    removeInputError,
  };
};

export default useInputsError;
