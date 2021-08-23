import styled from 'styled-components/native';

import { theme } from '../../../configs/constants';
import { vhPx, vwPx } from '../../helpers/units';

export const Container = styled.View`
  position: absolute;
  width: ${vwPx(100)};
  height: ${vhPx(100)};
  justify-content: center;
  align-items: center;
  background-color: ${theme.purple};
`;
