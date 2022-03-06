import PropTypes from 'prop-types';
import React from 'react';
import { Box } from '@mui/material';
import BodyEditor from './bodyEditor';
import Meta from './meta';

function Form({ step = 2, onInputChange, onRemoveInputError, inputErrors, inputValues }) {
  return (
    <Box paddingTop="3em" paddingBottom="3em">
      {step === 2 && (
        <Meta
          onInputChange={onInputChange}
          inputValues={inputValues}
          inputErrors={inputErrors}
          onRemoveInputError={onRemoveInputError}
        />
      )}
      {step === 1 && <BodyEditor onInputChange={onInputChange} inputValues={inputValues} />}
    </Box>
  );
}

Form.propTypes = {
  inputErrors: PropTypes.object.isRequired,
  inputValues: PropTypes.object.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onRemoveInputError: PropTypes.func.isRequired,
  step: PropTypes.number.isRequired,
};

export default Form;
