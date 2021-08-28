import styled from 'styled-components/native';
import { colors } from '../../../../../configs/constants';
import { Unit } from '../../../../helpers';

const { vwPx, vhPx } = Unit;

interface IProps {
  isHighlighted?: boolean;
}

export const Container = styled.View``;

export const TouchableContainer = styled.TouchableWithoutFeedback``;

export const Text = styled.Text<IProps>`
  font-family: ${({ isHighlighted }) =>
    isHighlighted ? 'Poppins-Medium' : 'Poppins-Light'};
  color: ${({ isHighlighted }) =>
    isHighlighted ? colors.purpleHighlight : colors.purple};
  font-size: ${vwPx(3.5)};
  position: relative;
  top: ${vhPx(0.15)};
`;
