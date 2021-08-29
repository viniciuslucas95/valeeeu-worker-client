import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StackScreens } from '../../enums';
import { MessagePage } from '../../';
import { headerStyle } from './styles';
import { MenuButton } from './components';

const Stack = createStackNavigator();

export function MessageStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={StackScreens.Messages}
        component={MessagePage}
        options={{
          headerTitle: 'Mensagens',
          ...headerStyle,
          headerRight: () => <MenuButton />,
        }}
      />
    </Stack.Navigator>
  );
}
