import styled from 'styled-components/native';
import { theme } from '../../../configs/constants';
import { vwPx } from '../../helpers/units';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${theme.white};
`;

export const ScrollViewContainer = styled.ScrollView`
  width: ${vwPx(100)};
`;
