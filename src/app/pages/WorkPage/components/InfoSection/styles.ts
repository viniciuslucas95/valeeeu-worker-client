import styled from 'styled-components/native';
import { colors } from '../../../../../shared/configs/constants';
import { Unit } from '../../../../../shared/app/helpers';

const { vhPx, vwPx } = Unit;

export const Container = styled.View`
  background-color: ${colors.purple};
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
  flex: 1;
  margin-left: ${vwPx(5)};
  color: ${colors.white};
`;

export const Name = styled.Text`
  color: ${colors.white};
  font-family: 'Poppins-Medium';
  font-size: ${vwPx(4)};
  height: ${vwPx(5)};
`;

export const Job = styled.Text`
  color: ${colors.white};
  font-family: 'Poppins-LightItalic';
  font-size: ${vwPx(3.5)};
  height: ${vwPx(5)};
`;

export const TitleAndItemContainer = styled.View``;

export const Title = styled.Text`
  color: ${colors.white};
  font-family: 'Poppins-Medium';
  font-size: ${vwPx(3.5)};
  height: ${vwPx(5)};
`;

export const Text = styled.Text`
  color: ${colors.white};
  font-family: 'Poppins-LightItalic';
  font-size: ${vwPx(3.5)};
  height: ${vwPx(5)};
`;
