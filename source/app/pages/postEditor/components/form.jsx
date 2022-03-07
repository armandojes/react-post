import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Box } from '@mui/material';
import Button from 'app/components/button';
import { colors } from 'app/theme/values';
import BodyEditor from './bodyEditor';
import Meta from './meta';

function Form({ onInputChange, inputValues }) {
  const [step, setStep] = useState(1);

  const handleNextFisrtStep = () => setStep(2);

  return (
    <Box paddingTop="3em" paddingBottom="3em">
      {step === 1 && (
        <BodyEditor
          onInputChange={onInputChange}
          inputValues={inputValues}
          onNext={handleNextFisrtStep}
        />
      )}
      {step === 2 && <Meta onInputChange={onInputChange} inputValues={inputValues} />}
      <Box display="flex" justifyContent="end" marginTop="1em">
        <Button
          variant="contained"
          backgrounColor={colors.blueLight}
          textColor={colors.white}
          textHoverColor={colors.white}
          onClick={handleNext}
        >
          <Box padding="0em 1em">Siguente</Box>
        </Button>
      </Box>
    </Box>
  );
}

Form.propTypes = {
  inputValues: PropTypes.object.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Form;
