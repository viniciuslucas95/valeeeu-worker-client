import styled from 'styled-components/native';
import { colors } from '../../../../../configs/constants';
import { Unit } from '../../../../helpers';

const { vwPx } = Unit;

export const Text = styled.Text`
  font-family: 'Poppins-Light';
  color: ${colors.purple};
  font-size: ${vwPx(3.75)};
`;
