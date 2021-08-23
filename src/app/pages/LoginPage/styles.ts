import styled from 'styled-components/native';

import { sizes, theme } from '../../../configs/constants';
import { vhPx, vwPx } from '../../helpers/units';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${theme.white};
`;

export const OptionsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: ${sizes.elementMaxWidth};
  height: ${vhPx(3)};
  padding: 0 ${vwPx(1)};
`;
