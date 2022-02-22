import { combineReducers } from 'redux';

// slices reducer
import meta from './meta';
import session from './session';

const reducer = combineReducers({
  meta,
  session,
  test: () => ({ testReducer: 'testReducerValue' }),
});

export default reducer;
