import styled from 'styled-components/native';
import { Unit } from '../../../../../helpers';

const { vwPx } = Unit;

export const Picture = styled.Image`
  width: ${vwPx(28)};
  height: ${vwPx(28)};
  border-radius: ${vwPx(5.7)};
  margin: 0 ${vwPx(3)} ${vwPx(3)} 0;
`;
