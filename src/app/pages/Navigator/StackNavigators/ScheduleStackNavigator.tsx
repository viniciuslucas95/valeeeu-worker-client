import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StackScreens } from '../../enums';
import { SchedulePage } from '../..';
import { headerStyle } from './styles';
import { MenuButton } from './components';

const Stack = createStackNavigator();

export function ScheduleStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={StackScreens.Schedule}
        component={SchedulePage}
        options={{
          headerTitle: 'Agendamentos',
          ...headerStyle,
          headerRight: () => <MenuButton />,
        }}
      />
    </Stack.Navigator>
  );
}
