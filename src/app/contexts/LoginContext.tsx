import React, { useState, createContext, PropsWithChildren } from 'react';
import { IContext } from './interfaces';

export const LoginContext = createContext<any>({});

export function LoginProvider({ children }: PropsWithChildren<IContext>) {
  const [account, setAccount] = useState();

  return (
    <LoginContext.Provider value={{ account, setAccount }}>
      {children}
    </LoginContext.Provider>
  );
}
