import { useState } from 'react';
import deleteObjectNullProperties from 'app/helpers/deleteObjectNullProperties';

/**
 * hook form handler
 * @param {Object} config
 * @param {Object} config.initialState - form initial state
 * @param {Object} config.rules - inputs rules
 */
const useForm = (config = {}) => {
  const [values, setValues] = useState(config.initialState || {});
  const [errors] = useState({});

  /**
   * handle any input change
   * @param {String} inputName - input name changed
   * @param {Any} inputValue - input value
   */
  const handleInputChange = (inputName, inputValue) => {
    const newState = { ...values, [inputName]: inputValue };
    setValues(deleteObjectNullProperties(newState));
  };

  /**
   * 
   * @param {*} scopedRules 
   */
  const runValidators = (scopedRules = null) => {
    const rules = scopedRules || config.rules;
    const errors = Object.keys(rules).reduce((accumulator, keyname) => {
      const currentRule = rules[keyname];
      const currentValue = values[keyname];
      const error = currentRule(currentValue);
      if (error) return { ...accumulator, [keyname]: error };
      return accumulator;
    }, {});
    return {
      errors,
      firtsError: Object.values(errors)[0] || null,
    };
  };

  return {
    handleInputChange,
    runValidators,
    inputErrors: errors,
    inputValues: values,
  };
};

export default useForm;
