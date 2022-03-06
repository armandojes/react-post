import { Box, TextField } from '@mui/material';
import React from 'react';
import propTypes from 'prop-types';
import TagsInput from './tagsInput';

function Meta({ inputValues, inputErrors, onInputChange, onRemoveInputError }) {
  const handleInputFocus = (event) => {
    onRemoveInputError(event.target.name);
  };

  const handleInputChange = (event) => {
    onInputChange(event.target.name, event.target.value);
  };

  const handleTagsChange = (value) => {
    onInputChange('tags', value);
  };

  return (
    <>
      <Box paddingBottom="1em" paddingTop="1em">
        <TextField
          error={!!inputErrors.title}
          onFocus={handleInputFocus}
          fullWidth
          label="Titulo del post"
          variant="standard"
          value={inputValues.title || ''}
          name="title"
          onChange={handleInputChange}
        />
      </Box>
      <Box paddingTop="1em" paddingBottom="1em">
        <TextField
          error={!!inputErrors.description}
          onFocus={handleInputFocus}
          multiline
          fullWidth
          variant="standard"
          label="Description"
          value={inputValues.description || ''}
          name="description"
          onChange={handleInputChange}
        />
      </Box>
      <TagsInput onChange={handleTagsChange} value={inputValues.tags || []} />
    </>
  );
}

Meta.propTypes = {
  inputValues: propTypes.object.isRequired,
  inputErrors: propTypes.object.isRequired,
  onInputChange: propTypes.func.isRequired,
  onRemoveInputError: propTypes.func.isRequired,
};

export default Meta;
