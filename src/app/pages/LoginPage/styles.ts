import styled from 'styled-components/native';
import { colors } from '../../../configs/constants';
import { Unit } from '../../helpers';

const { vhPx, vwPx } = Unit;

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${colors.white};
`;

export const OptionsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: ${vwPx(90)};
  height: ${vhPx(3)};
  padding: 0 ${vwPx(1)};
`;
