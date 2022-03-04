import { Box, TextField } from '@mui/material';
import React from 'react';
import propTypes from 'prop-types';
import TagsInput from './tagsInput';

function Meta({ values, onChange }) {
  const handleInputChange = (event) => {
    onChange(event.target.name, event.target.value);
  };

  const handleTagsChange = (value) => {
    onChange('tags', value);
  };

  return (
    <>
      <Box paddingBottom="1em" paddingTop="1em">
        <TextField
          fullWidth
          label="Titulo del post"
          variant="standard"
          value={values.title || ''}
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
          value={values.description || ''}
          name="description"
          onChange={handleInputChange}
        />
      </Box>
      <TagsInput onChange={handleTagsChange} value={values.tags || []} />
    </>
  );
}

Meta.propTypes = {
  values: propTypes.object.isRequired,
  onChange: propTypes.func.isRequired,
};

export default Meta;
