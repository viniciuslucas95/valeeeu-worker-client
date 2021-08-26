import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { StackScreens } from '../../enums';
import { LoginPage, CreateAccountPage } from '../..';
import { Header } from '../../../components';

const Stack = createStackNavigator();

export function LoginStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={StackScreens.Login}
        component={LoginPage}
        options={{
          header: ({ navigation }) => (
            <Header navigation={navigation} title='Login' secondary />
          ),
        }}
      />
      <Stack.Screen
        name={StackScreens.CreateAccount}
        component={CreateAccountPage}
        options={{
          header: ({ navigation }) => (
            <Header navigation={navigation} title='Criar Conta' secondary />
          ),
        }}
      />
    </Stack.Navigator>
  );
}
