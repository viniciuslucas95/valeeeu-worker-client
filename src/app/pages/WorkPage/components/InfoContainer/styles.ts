import styled from 'styled-components/native';

import { theme } from '../../../../../configs/constants';
import { vhPx, vwPx } from '../../../../helpers/units';

export const Container = styled.View`
  background-color: ${theme.purple};
  padding: ${vhPx(2)} ${vwPx(5)};
`;

export const PictureAndNameContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Photo = styled.Image`
  width: ${vwPx(25)};
  height: ${vwPx(25)};
  border-radius: ${vwPx(12.5)};
`;

export const NameContainer = styled.View`
  margin-left: ${vwPx(5)};
  max-width: ${vwPx(60)};
  color: ${theme.white};
`;

export const Name = styled.Text`
  color: ${theme.white};
  font-family: 'Poppins-Regular';
  font-size: ${vwPx(5)};
`;

export const InfoContainer = styled.View`
  flex-direction: column;
`;

export const Line = styled.View`
  flex-direction: row;
  max-width: ${vwPx(65)};
  height: ${vhPx(3)};
`;

export const Work = styled.Text`
  font-family: 'Poppins-LightItalic';
  font-size: ${vwPx(4)};
  color: ${theme.purple};
`;
