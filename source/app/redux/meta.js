import { createSlice } from '@reduxjs/toolkit';

const { reducer, actions } = createSlice({
  name: 'meta',
  initialState: {
    theme: 'light',
    language: 'es',
  },
  reducers: {
    setTheme(state, action) {
      return {
        ...state,
        theme: action.payload,
      };
    },
    setLanguage(state, action) {
      return {
        ...state,
        language: action.payload,
      };
    },
  },
});

export const { setLanguage, setTheme } = actions;

export default reducer;
