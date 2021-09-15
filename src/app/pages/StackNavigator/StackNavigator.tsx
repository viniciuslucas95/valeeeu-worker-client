import React, { useContext } from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import { LogoSvg } from '../../../shared/assets/svgs';
import { Unit } from '../../../shared/app/helpers';
import { colors } from '../../../shared/configs';
import { MainScreens } from '../../enums';
import { WorkPage } from '../WorkPage';
import { HorizontalContainer, Header } from '../../../shared/app/components';
import {
  BackButton,
  MenuButton,
  MessageButton,
  ScheduleButton,
} from '../../../shared/app/components/Header/HeaderButtons';
import { MessagePage, SchedulePage } from '../../../shared/app/pages';
import { loginContext } from '../../../shared/app/contexts';
import { LoginStack } from '../../../shared/app/pages/StackNavigators';
import { FlexDistribution } from '../../../shared/app/enums';

const { vw } = Unit;
const Stack = createStackNavigator();

export function StackNavigator() {
  const { account } = useContext(loginContext);

  return (
    <>
      {account ? (
        <Stack.Navigator
          screenOptions={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        >
          <Stack.Screen
            name={MainScreens.Work}
            component={WorkPage}
            options={{
              header: ({ navigation }) => (
                <Header
                  leftSide={<LogoSvg size={vw(0.4)} color={colors.white} />}
                  rightSide={
                    <HorizontalContainer
                      flexDistribution={FlexDistribution.spaceBetween}
                    >
                      <MessageButton navigation={navigation} />
                      <ScheduleButton navigation={navigation} />
                      <MenuButton navigation={navigation} />
                    </HorizontalContainer>
                  }
                />
              ),
            }}
          />
          <Stack.Screen
            name={MainScreens.Message}
            component={MessagePage}
            options={{
              header: ({ navigation }) => (
                <Header leftSide={<BackButton navigation={navigation} />} />
              ),
            }}
          />
          <Stack.Screen
            name={MainScreens.Schedule}
            component={SchedulePage}
            options={{
              header: ({ navigation }) => (
                <Header leftSide={<BackButton navigation={navigation} />} />
              ),
            }}
          />
        </Stack.Navigator>
      ) : (
        <LoginStack />
      )}
    </>
  );
}
