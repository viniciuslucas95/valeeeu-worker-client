import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StackScreens } from '../../enums';
import { LoginPage, CreateAccountPage } from '../..';
import { headerStyle } from './styles';
import { MenuButton } from './components';

const Stack = createStackNavigator();

export function LoginStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={StackScreens.Login}
        component={LoginPage}
        options={{
          headerTitle: 'Login',
          ...headerStyle,
          headerRight: () => <MenuButton />,
        }}
      />
      <Stack.Screen
        name={StackScreens.CreateAccount}
        component={CreateAccountPage}
        options={{
          headerTitle: 'Criar Conta',
          ...headerStyle,
          headerRight: () => <MenuButton />,
        }}
      />
    </Stack.Navigator>
  );
}
