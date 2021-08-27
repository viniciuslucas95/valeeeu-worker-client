import React, { useState, createContext, PropsWithChildren } from 'react';
import { IContext } from './interfaces';

export const WorkContext = createContext<any>({});

export function WorkProvider({ children }: PropsWithChildren<IContext>) {
  const [isWorking, setIsWorking] = useState();

  return (
    <WorkContext.Provider value={{ isWorking, setIsWorking }}>
      {children}
    </WorkContext.Provider>
  );
}
