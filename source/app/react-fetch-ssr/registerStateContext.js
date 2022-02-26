import { useContext, createContext } from 'react';

const registerStateContext = createContext();

export const useRegisterState = () => useContext(registerStateContext);

export const RegisterStateProvider = registerStateContext.Provider;
