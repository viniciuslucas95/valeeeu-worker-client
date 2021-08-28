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
import { loginContext, workContext } from '../../contexts';

const { vh, vw } = Unit;

const Tab = createBottomTabNavigator();

export function TabNavigator() {
  const { account } = useContext(loginContext);
  const { isWorking } = useContext(workContext);

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
            tabBarStyle: { borderTopColor: colors.purpleHighlight },
          })}
        >
          <Tab.Screen
            name={TabScreens.Work}
            component={WorkStackNavigator}
            options={{
              tabBarBadge: '',
              tabBarBadgeStyle: {
                backgroundColor: isWorking ? colors.green : colors.mediumGray,
                top: vh(3.5),
                left: vw(2),
                width: vh(1.75),
                height: vh(1.75),
                minWidth: 0,
                minHeight: 0,
                borderRadius: vh(1),
                opacity: isWorking ? 1 : 0,
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
