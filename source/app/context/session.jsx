import { element } from 'prop-types';
import React, { createContext, useContext, useMemo, useState } from 'react';
import { deleteCookie, setCookie } from '../helpers/cookie';

const sessionContext = createContext({ session: {}, setSession: () => {} });

const useSession = () => useContext(sessionContext);

function SessionProvider({ children }) {
  const [state, setState] = useState(null);

  const handleSetSession = (newState) => {
    setState(newState);
    if (!newState) deleteCookie('session');
    else setCookie('session', JSON.stringify(newState), 7);
  };

  const value = useMemo(() => ({ session: state, setSession: handleSetSession }), [state]);

  return (
    <sessionContext.Provider value={value}>
      {children}
    </sessionContext.Provider>
  );
}

SessionProvider.propTypes = {
  children: element.isRequired,
};

export {
  SessionProvider,
  useSession,
};

export default {
  SessionProvider,
  useSession,
};
