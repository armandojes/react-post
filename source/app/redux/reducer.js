import { combineReducers } from 'redux';

// slices reducer
import theme from './theme';

const reducer = combineReducers({
  theme,
});

export default reducer;
