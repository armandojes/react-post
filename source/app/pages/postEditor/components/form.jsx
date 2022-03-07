import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Box } from '@mui/material';
import Meta from './meta';
import BodyEditor from './bodyEditor';

function Form({ onAnyInputChange, inputValues }) {
  const [step] = useState(2);

  return (
    <Box paddingTop="3em" paddingBottom="3em">
      {step === 1 && <BodyEditor inputValues={inputValues} onAnyInputChange={onAnyInputChange} />}
      {step === 2 && <Meta inputValues={inputValues} onAnyInputChange={onAnyInputChange} />}
    </Box>
  );
}

Form.propTypes = {
  inputValues: PropTypes.object.isRequired,
  onAnyInputChange: PropTypes.func.isRequired,
};

export default Form;
