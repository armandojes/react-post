import { createContext, useContext } from 'react';

const context = createContext({});

const { Provider } = context;

/**
 * get server params
 * @return {Object} server params
 */
const useServerParams = () => useContext(context);

export { useServerParams, Provider };

export default {
  useServerParams,
  Provider,
};
