import styled from 'styled-components/native';
import { colors } from '../../../../../configs/constants';
import { Unit } from '../../../../helpers';

const { vwPx, vhPx } = Unit;

interface IProps {
  isChecked?: boolean;
}

export const TouchableContainer = styled.TouchableWithoutFeedback``;

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Text = styled.Text<IProps>`
  margin-left: ${vwPx(2)};
  font-family: ${({ isChecked }) =>
    isChecked ? 'Poppins-Medium' : 'Poppins-Light'};
  color: ${({ isChecked }) =>
    isChecked ? colors.darkGray : colors.mediumGray};
  position: relative;
  top: ${vhPx(0.15)};
  font-size: ${vwPx(3.5)};
`;
