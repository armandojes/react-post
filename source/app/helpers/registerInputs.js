const registerInputs = (inputName = "", values = {}, errors = {}) => {
  const handleChange = (event) => {};

  return {
    onChange: handleChange,
    name: inputName,
  };
};

export default registerInputs;
