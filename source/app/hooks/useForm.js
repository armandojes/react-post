import { useState } from 'react';
import deleteObjectNullProperties from 'app/helpers/deleteObjectNullProperties';

const useForm = (config = {}) => {
  const [inputValues, setInputValues] = useState(config.initialState || {});

  const updateFormValue = (inputName, inputValue) => {
    setInputValues((prevState) => {
      const newState = { ...prevState, [inputName]: inputValue };
      return deleteObjectNullProperties(newState);
    });
  };

  return {
    inputValues,
    updateFormValue,
  };
};

export default useForm;
