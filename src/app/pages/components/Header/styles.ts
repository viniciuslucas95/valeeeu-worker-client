import styled from 'styled-components/native';
import { colors, sizes } from '../../../../configs';
import { Unit } from '../../../helpers';

const { vhPx, vwPx } = Unit;

export const Container = styled.View`
  flex-direction: row;
  background-color: ${colors.purple};
  border-bottom-color: ${colors.purpleHighlight};
  border-bottom-width: ${sizes.border};
  height: ${vhPx(6)};
`;

export const LeftHeaderSide = styled.View`
  flex-direction: row;
  flex: 1;
  align-items: center;
  margin: 0 ${vwPx(5)};
`;

export const RightHeaderSide = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-right: ${vwPx(5)};
`;
