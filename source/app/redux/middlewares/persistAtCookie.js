import { setCookie } from '../../helpers/cookie';

const persistAtCookie = (store) => (next) => (action) => {
  const prevState = store.getState();
  next(action);
  const nextState = store.getState();

  if (
    prevState.meta !== nextState.meta
  ) {
    const stateToPersist = {
      meta: nextState.meta,
    };
    setCookie('reduxState', JSON.stringify(stateToPersist), 30);
  }
};

export default persistAtCookie;
