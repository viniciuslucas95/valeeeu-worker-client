import { StackNavigationOptions } from '@react-navigation/stack';
import { colors } from '../../../../../configs/constants';
import { Unit } from '../../../../helpers';

const { vh } = Unit;

export const headerStyle: StackNavigationOptions = {
  headerTintColor: colors.white,
  headerTitleStyle: {
    color: colors.white,
    fontFamily: 'Poppins-Regular',
    top: vh(0.125),
  },
  headerStyle: {
    backgroundColor: colors.purple,
  },
};
