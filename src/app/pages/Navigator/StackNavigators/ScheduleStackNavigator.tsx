import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { StackScreens } from '../../enums';
import { SchedulePage } from '../..';
import { Header } from '../../../components';

const Stack = createStackNavigator();

export function ScheduleStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={StackScreens.Schedule}
        component={SchedulePage}
        options={{
          header: ({ navigation }) => (
            <Header navigation={navigation} title='Agendamentos' />
          ),
        }}
      />
    </Stack.Navigator>
  );
}
