import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {
  WorkStackNavigator,
  MessageStackNavigator,
  ScheduleStackNavigator,
  LoginStackNavigator,
} from './StackNavigators';
import { theme } from '../../../configs/constants';
import {
  WorkIcon,
  MessageIcon,
  ScheduleIcon,
} from '../../../assets/svgs/icons';
import { TabScreens } from '../enums';
import { vh, vw } from '../../helpers/units';
import { loginContext } from '../../contexts';

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
                return <WorkIcon thick={focused} />;
              if (route.name === TabScreens.Message)
                return <MessageIcon thick={focused} />;
              if (route.name === TabScreens.Schedule)
                return <ScheduleIcon thick={focused} />;
            },
            tabBarActiveBackgroundColor: theme.purple,
            tabBarInactiveBackgroundColor: theme.purple,
            headerShown: false,
            tabBarShowLabel: false,
          })}
        >
          <Tab.Screen
            name={TabScreens.Work}
            component={WorkStackNavigator}
            options={{
              tabBarBadge: '',
              tabBarBadgeStyle: {
                backgroundColor: theme.green,
                top: vh(3.25),
                left: vw(1.75),
                width: vh(2),
                height: vh(2),
                minWidth: 1,
                minHeight: 1,
                borderRadius: vh(1),
              },
            }}
          />
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
