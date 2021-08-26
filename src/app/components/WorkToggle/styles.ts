import styled from 'styled-components/native';

import { theme } from '../../../configs/constants';
import { vhPx, vwPx } from '../../helpers/units';

interface IProps {
  isWorking?: boolean;
}

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const Text = styled.Text<IProps>`
  font-family: 'Poppins-Medium';
  color: ${({ isWorking }) => (isWorking ? theme.white : theme.lightGray)};
  font-size: ${vwPx(5.5)};
  top: ${vhPx(0.25)};
  margin-right: ${vwPx(2)};
`;
