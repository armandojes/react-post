import { element } from 'prop-types';
import React, { createContext, useContext, useMemo } from 'react';
import { deleteCookie, setCookie } from '../helpers/cookie';
import useIsomorphicState from '../react-fetch-ssr/useIsomorphicState';
import { useServerParams } from './serverParams';

const sessionContext = createContext({ session: {}, setSession: () => {} });

const useSession = () => useContext(sessionContext);

function SessionProvider({ children }) {
  const serverParams = useServerParams();
  const [state, setState] = useIsomorphicState('sessionContext', serverParams.session || null);

  const handleSetSession = (newState) => {
    setState(newState);
    if (!newState) deleteCookie('session');
    else setCookie('session', JSON.stringify(newState), 7);
  };

  const value = useMemo(() => ({ session: state, setSession: handleSetSession }), [state]);

  return <sessionContext.Provider value={value}>{children}</sessionContext.Provider>;
}

SessionProvider.propTypes = {
  children: element.isRequired,
};

export { SessionProvider, useSession };

export default {
  SessionProvider,
  useSession,
};
