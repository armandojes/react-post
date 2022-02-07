import { createSlice } from '@reduxjs/toolkit';

const { reducer, actions } = createSlice({
  name: 'theme',
  initialState: 'light',
  reducers: {
    setValue(_state, action) {
      return action.payload;
    },
  },
});

export { actions };

export default reducer;
