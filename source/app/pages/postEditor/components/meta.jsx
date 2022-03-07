import { Box, TextField } from '@mui/material';
import React from 'react';
import propTypes from 'prop-types';
import TagsInput from './tagsInput';

function Meta({ inputValues, onInputChange }) {
  const handleInputChange = (event) => {
    onInputChange(event.target.name, event.target.value);
  };

  const handleTagsChange = (value) => {
    onInputChange('tags', value);
  };

  return (
    <Box marginBottom="3em">
      <Box paddingBottom="1em" paddingTop="1em">
        <TextField
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
    </Box>
  );
}

Meta.propTypes = {
  inputValues: propTypes.object.isRequired,
  onInputChange: propTypes.func.isRequired,
};

export default Meta;
