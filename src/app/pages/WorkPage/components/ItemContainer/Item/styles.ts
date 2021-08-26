import styled from 'styled-components/native';
import { theme } from '../../../../../../configs/constants';
import { vwPx } from '../../../../../helpers/units';

export const Container = styled.View`
  flex-direction: row;
`;

export const Text = styled.Text`
  color: ${theme.white};
  font-family: 'Poppins-LightItalic';
  font-size: ${vwPx(3.5)};
  height: ${vwPx(5)};
`;
