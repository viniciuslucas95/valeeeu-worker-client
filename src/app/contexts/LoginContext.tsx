import React, { useState, createContext, PropsWithChildren } from 'react';

export const LoginContext = createContext<any>({});

export function LoginProvider({ children }: PropsWithChildren<any>) {
  const [account, setAccount] = useState();

  return (
    <LoginContext.Provider value={{ account, setAccount }}>
      {children}
    </LoginContext.Provider>
  );
}
