import styled from 'styled-components/native';
import { theme } from '../../../configs/constants';
import { vwPx } from '../../helpers/units';

interface IProps {
  size?: string;
  secondary?: boolean;
}

export const Container = styled.View<IProps>`
  width: ${({ size }) => size ?? vwPx(90)};
  flex-direction: row;
  align-items: center;
`;

export const Line = styled.View<IProps>`
  background-color: ${({ secondary }) =>
    secondary ? theme.purple : theme.white};
  height: 1px;
  flex: 1;
`;

export const Text = styled.Text<IProps>`
  font-family: 'Poppins-Light';
  color: ${({ secondary }) => (secondary ? theme.purple : theme.white)};
  margin: 0 ${vwPx(3)};
  font-size: ${vwPx(3.75)};
`;
