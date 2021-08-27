import styled from 'styled-components/native';
import { theme } from '../../../../../configs/constants';
import { vwPx } from '../../../../helpers/units';

export const Text = styled.Text`
  font-family: 'Poppins-Light';
  color: ${theme.purple};
  font-size: ${vwPx(3.75)};
`;
