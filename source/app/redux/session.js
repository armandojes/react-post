import { createSlice } from '@reduxjs/toolkit';

const { reducer, actions } = createSlice({
  name: 'session',
  initialState: null,
  reducers: {
    setSession: (_state, action) => ({ ...action.payload }),
  },
});

export const { setSession } = actions;

export default reducer;
