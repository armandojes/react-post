import React, { useState } from 'react';
import { Box } from '@mui/material';
import useForm from 'app/hooks/useForm';
import BodyEditor from './bodyEditor';
import Meta from './meta';

function Form() {
  const { inputValues, updateFormValue } = useForm();
  const [step] = useState(2);

  return (
    <Box paddingTop="3em" paddingBottom="3em">
      {step === 2 && <Meta values={inputValues} onChange={updateFormValue} />}
      {step === 1 && <BodyEditor />}
    </Box>
  );
}

export default Form;
