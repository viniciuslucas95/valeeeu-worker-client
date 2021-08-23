import 'react-native-gesture-handler';
import { registerRootComponent } from 'expo';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { LoadingPage } from './app/pages';
import { Navigator } from './app/pages/Navigator';
import { LoginProvider } from './app/contexts';
import { useFonts } from './app/hooks/useFonts';

export default function App() {
  const { isLoaded } = useFonts();

  if (!isLoaded) return <LoadingPage />;

  return (
    <LoginProvider>
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </LoginProvider>
  );
}

registerRootComponent(App);
