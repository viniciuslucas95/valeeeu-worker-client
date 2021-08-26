import styled from 'styled-components/native';

import { theme } from '../../../configs/constants';
import { vhPx, vwPx } from '../../helpers/units';

interface IProps {
  secondary?: boolean;
}

export const Container = styled.View<IProps>`
  flex-direction: row;
  align-items: flex-end;
  background-color: ${({ secondary }) =>
    secondary ? theme.purple : theme.white};
  height: ${vhPx(10)};
  border-bottom-width: 0.25px;
  border-color: ${theme.purpleHighlight};
`;

export const TitleContainer = styled.View`
  height: 60%;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text<IProps>`
  font-family: 'Poppins-Medium';
  font-size: ${vwPx(5.5)};
  color: ${({ secondary }) => (secondary ? theme.white : theme.purple)};
`;

export const ButtonContainer = styled.View`
  height: 60%;
  width: ${vwPx(15)};
`;

export const TouchableContainer = styled.TouchableWithoutFeedback``;

export const IconContainer = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
