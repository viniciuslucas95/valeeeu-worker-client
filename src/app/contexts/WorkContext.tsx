import React, { useState, createContext, PropsWithChildren } from 'react';

export const WorkContext = createContext<any>({});

export function WorkProvider({ children }: PropsWithChildren<any>) {
  const [isWorking, setIsWorking] = useState();

  return (
    <WorkContext.Provider value={{ isWorking, setIsWorking }}>
      {children}
    </WorkContext.Provider>
  );
}
