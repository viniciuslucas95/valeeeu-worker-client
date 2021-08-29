import React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import { StackScreens } from '../../enums';
import { ButtonsContainer } from './components';
import { WorkPage, MessagePage, SchedulePage } from '../..';
import { Header, Touchable } from '../../components';
import { LogoSvg } from '../../../../assets/svgs';
import { Unit } from '../../../helpers';
import { colors } from '../../../../configs';
import {
  ArrowIcon,
  MenuIcon,
  MessageIcon,
  ScheduleIcon,
} from '../../../../assets/svgs/icons';

const { vw } = Unit;
const Stack = createStackNavigator();

export function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Stack.Screen
        name={StackScreens.Work}
        component={WorkPage}
        options={{
          header: ({ navigation }) => (
            <Header
              leftSide={<LogoSvg size={vw(0.4)} color={colors.white} />}
              rightSide={
                <ButtonsContainer>
                  <Touchable
                    onPress={() => navigation.navigate(StackScreens.Messages)}
                  >
                    <MessageIcon />
                  </Touchable>
                  <Touchable
                    onPress={() => navigation.navigate(StackScreens.Schedules)}
                    style={{ marginHorizontal: vw(5) }}
                  >
                    <ScheduleIcon />
                  </Touchable>
                  <Touchable onPress={() => console.log('menu pressed')}>
                    <MenuIcon />
                  </Touchable>
                </ButtonsContainer>
              }
            />
          ),
        }}
      />
      <Stack.Screen
        name={StackScreens.Messages}
        component={MessagePage}
        options={{
          header: ({ navigation }) => (
            <Header
              leftSide={
                <Touchable onPress={() => navigation.goBack()}>
                  <ArrowIcon />
                </Touchable>
              }
            />
          ),
        }}
      />
      <Stack.Screen
        name={StackScreens.Schedules}
        component={SchedulePage}
        options={{
          header: ({ navigation }) => (
            <Header
              leftSide={
                <Touchable
                  onPress={() => navigation.goBack()}
                  buttonContainerStyle={{
                    paddingHorizontal: vw(3),
                    paddingVertical: vw(2),
                  }}
                >
                  <ArrowIcon />
                </Touchable>
              }
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}
