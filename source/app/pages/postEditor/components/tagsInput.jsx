import PropTypes from 'prop-types';
import { Box, Chip, Stack, TextField } from '@mui/material';
import React, { useState } from 'react';

function TagsInput({ onChange, value }) {
  const [inputValue, setInputValue] = useState();

  const addTag = (tagValue) => {
    if (!value.includes(tagValue)) {
      const newTags = [...value, tagValue];
      onChange(newTags);
    }
  };

  const deleteTag = (tagValue) => {
    const newTags = value.filter((currentTag) => currentTag !== tagValue);
    onChange(newTags);
  };

  const handleInputChange = (e) => {
    const newValue = e.target.value || '';
    const newValueString = newValue.toString();
    const lastCharacter = newValueString.substr(-1);
    if (lastCharacter === ',') {
      addTag(inputValue);
      setInputValue('');
    } else {
      setInputValue(newValue);
    }
  };

  return (
    <Box paddingTop="1em" paddingBottom="1em">
      <Box paddingBottom="1em">
        <Stack direction="row" spacing=".5em">
          {value.map((currenTag) => (
            <Chip
              label={currenTag}
              onDelete={() => deleteTag(currenTag)}
              color="primary"
              data-value={currenTag}
            />
          ))}
        </Stack>
      </Box>
      <TextField variant="standard" label="Tags" onChange={handleInputChange} value={inputValue} />
    </Box>
  );
}

TagsInput.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.array,
};

TagsInput.defaultProps = {
  onChange: () => {},
  value: [],
};

export default TagsInput;
