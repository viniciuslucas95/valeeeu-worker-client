import styled from 'styled-components/native';

import { theme, sizes } from '../../../configs/constants';
import { vhPx, vwPx } from '../../helpers/units';
import { Sizes } from '../enums';

interface IProps {
  secondary?: boolean;
  highlight?: boolean;
  width?: string;
  size?: Sizes;
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
  height: ${({ size }) =>
    size === Sizes.small
      ? sizes.buttonSmallHeight
      : size === Sizes.big
      ? sizes.buttonBigHeight
      : sizes.buttonMediumHeight};
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
  font-size: ${({ size }) =>
    size === Sizes.small
      ? sizes.textSmall
      : size === Sizes.big
      ? sizes.textBig
      : sizes.textMedium};
  color: ${({ secondary, highlight }) =>
    secondary
      ? highlight
        ? theme.purpleHighlight
        : theme.purple
      : highlight
      ? theme.whiteHighlight
      : theme.white};
`;
