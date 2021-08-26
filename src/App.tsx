import 'react-native-gesture-handler';
import { registerRootComponent } from 'expo';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Navigator } from './app/pages/Navigator';
import { LoginProvider, WorkProvider } from './app/contexts';
import { useFonts } from './app/hooks/useFonts';
import AppLoading from 'expo-app-loading';

export default function App() {
  const { isLoaded } = useFonts();

  if (!isLoaded) return <AppLoading />;

  return (
    <LoginProvider>
      <WorkProvider>
        <NavigationContainer>
          <Navigator />
        </NavigationContainer>
      </WorkProvider>
    </LoginProvider>
  );
}

registerRootComponent(App);
