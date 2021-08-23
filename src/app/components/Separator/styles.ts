import styled from 'styled-components/native';

import { sizes, theme } from '../../../configs/constants';
import { vhPx, vwPx } from '../../helpers/units';

export const Container = styled.View`
  width: ${sizes.elementMaxWidth};
  flex-direction: row;
  align-items: center;
`;

export const Line = styled.View`
  background-color: ${theme.purple};
  height: 1px;
  flex: 1;
`;

export const Text = styled.Text`
  font-family: 'Poppins-Light';
  color: ${theme.purple};
  margin: 0 ${vwPx(3)};
`;
