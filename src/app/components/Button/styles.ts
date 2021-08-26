import styled from 'styled-components/native';

import { theme, sizes } from '../../../configs/constants';
import { vhPx, vwPx } from '../../helpers/units';

interface IProps {
  secondary?: boolean;
  highlight?: boolean;
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
  width: ${vwPx(80)};
  height: ${sizes.elementHeight};
  border-radius: ${vwPx(10)};
  border-color: ${({ secondary, highlight }) =>
    secondary
      ? highlight
        ? theme.purpleHighlight
        : theme.purple
      : theme.white};
  border-width: ${({ secondary }) => (secondary ? sizes.border : 0)};
  padding: 0 ${vwPx(2)};
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text<IProps>`
  position: relative;
  top: ${vhPx(0.2)};
  font-family: 'Poppins-Medium';
  color: ${({ secondary, highlight }) =>
    secondary
      ? highlight
        ? theme.purpleHighlight
        : theme.purple
      : highlight
      ? theme.whiteHighlight
      : theme.white};
  text-transform: uppercase;
`;
