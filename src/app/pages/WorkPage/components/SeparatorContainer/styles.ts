import styled from 'styled-components/native';
import { Unit } from '../../../../helpers';

const { vhPx, vwPx } = Unit;

export const Container = styled.View`
  padding: ${vhPx(2)} ${vwPx(5)} 0 ${vwPx(5)};
`;
