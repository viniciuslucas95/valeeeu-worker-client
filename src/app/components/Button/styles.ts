import styled from 'styled-components/native';

import { theme, sizes } from '../../../configs/constants';
import { vhPx, vwPx } from '../../helpers/units';

interface IProps {
  secondary?: boolean;
  highlight?: boolean;
  width?: string;
  small?: boolean;
}

export const Container = styled.View``;

export const TouchableContainer = styled.TouchableWithoutFeedback``;

export const ButtonContainer = styled.View<IProps>`
  background-color: ${({ secondary, highlight }) =>
    secondary
      ? highlight
        ? theme.whiteHighlight
        : theme.white
      : highlight
      ? theme.purpleHighlight
      : theme.purple};
  width: ${({ width }) => width ?? vwPx(90)};
  height: ${({ small }) =>
    small ? sizes.buttonSmallHeight : sizes.buttonHeight};
  border-radius: ${vwPx(10)};
  border-color: ${({ secondary, highlight }) =>
    secondary
      ? highlight
        ? theme.purpleHighlight
        : theme.purple
      : theme.white};
  border-width: ${({ secondary }) => (secondary ? sizes.border : 0)};
  padding: 0 ${vwPx(2)};
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text<IProps>`
  top: ${vhPx(0.2)};
  font-family: 'Poppins-SemiBold';
  font-size: ${({ small }) =>
    small ? sizes.textSmallSize : sizes.textMediumSize};
  color: ${({ secondary, highlight }) =>
    secondary
      ? highlight
        ? theme.purpleHighlight
        : theme.purple
      : highlight
      ? theme.whiteHighlight
      : theme.white};
`;
