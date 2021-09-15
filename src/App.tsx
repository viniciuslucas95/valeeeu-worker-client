import 'react-native-gesture-handler';
import { registerRootComponent } from 'expo';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './app/pages';
import { LoginProvider } from './shared/app/contexts';
import { useFonts } from './shared/app/hooks/useFonts';
import AppLoading from 'expo-app-loading';
import {
  setStatusBarStyle,
  setStatusBarBackgroundColor,
  setStatusBarTranslucent,
} from 'expo-status-bar';
import { colors } from './shared/configs';

export default function App() {
  const { isLoaded } = useFonts();

  setStatusBarStyle('light');
  setStatusBarTranslucent(false);
  setStatusBarBackgroundColor(colors.purple, false);

  if (!isLoaded) return <AppLoading />;

  return (
    <LoginProvider>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </LoginProvider>
  );
}

registerRootComponent(App);
