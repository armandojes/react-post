import { combineReducers } from 'redux';

// slices reducer
import meta from './meta';

const reducer = combineReducers({
  meta,
  test: () => ({ testReducer: 'testReducerValue' }),
});

export default reducer;
