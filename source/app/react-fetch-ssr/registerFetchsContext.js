import { useContext, createContext } from "react";

const registerFetchContext = createContext();

export const useRegisterFetch = () => useContext(registerFetchContext);

export const RegisterFetchProvider = registerFetchContext.Provider;
