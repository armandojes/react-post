import { Box, TextField } from '@mui/material';
import React from 'react';
import { object, func } from 'prop-types';
import TagsInput from './tagsInput';

function Meta({ inputValues, onAnyInputChange }) {
  const handleInputChange = (event) => {
    onAnyInputChange(event.target.name, event.target.value);
  };

  const handleTagsChange = (value) => {
    onAnyInputChange('tags', value);
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
  onAnyInputChange: func.isRequired,
  inputValues: object.isRequired,
};

export default Meta;
