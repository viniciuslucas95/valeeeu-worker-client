import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  WorkStackNavigator,
  MessageStackNavigator,
  ScheduleStackNavigator,
  LoginStackNavigator,
} from './StackNavigators';
import { colors } from '../../../configs/constants';
import {
  WorkIcon,
  MessageIcon,
  ScheduleIcon,
} from '../../../assets/svgs/icons';
import { TabScreens } from '../enums';
import { Unit } from '../../helpers';
import { loginContext } from '../../contexts';

const { vh } = Unit;

const Tab = createBottomTabNavigator();

export function TabNavigator() {
  const { account } = useContext(loginContext);

  return (
    <>
      {account ? (
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused }) => {
              if (route.name === TabScreens.Work)
                return (
                  <WorkIcon isActive={focused} style={{ bottom: vh(0.25) }} />
                );
              if (route.name === TabScreens.Message)
                return (
                  <MessageIcon isActive={focused} style={{ top: vh(0.25) }} />
                );
              if (route.name === TabScreens.Schedule)
                return <ScheduleIcon isActive={focused} />;
            },
            tabBarActiveBackgroundColor: colors.purple,
            tabBarInactiveBackgroundColor: colors.purple,
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: {
              borderTopColor: colors.purpleHighlight,
            },
          })}
        >
          <Tab.Screen name={TabScreens.Work} component={WorkStackNavigator} />
          <Tab.Screen
            name={TabScreens.Message}
            component={MessageStackNavigator}
            options={{ tabBarBadge: 3 }}
          />
          <Tab.Screen
            name={TabScreens.Schedule}
            component={ScheduleStackNavigator}
            options={{ tabBarBadge: 1 }}
          />
        </Tab.Navigator>
      ) : (
        <LoginStackNavigator />
      )}
    </>
  );
}
