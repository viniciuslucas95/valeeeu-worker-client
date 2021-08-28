import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StackScreens } from '../../enums';
import { WorkPage } from '../..';
import { headerStyle } from './styles';
import { MenuButton } from './components';

const Stack = createStackNavigator();

export function WorkStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={StackScreens.Work}
        component={WorkPage}
        options={{
          headerTitle: 'Trabalho',
          ...headerStyle,
          headerRight: () => <MenuButton />,
        }}
      />
    </Stack.Navigator>
  );
}
