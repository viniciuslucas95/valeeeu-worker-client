import React, { PropsWithChildren } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { Container, Text } from './styles';
import { CircleSvg } from '../../../../../../assets/svgs/CircleSvg';
import { theme } from '../../../../../../configs/constants';
import { vw } from '../../../../../helpers/units';

interface IProps {
  children: string;
  separator?: boolean;
  style?: StyleProp<ViewStyle>;
  secondary?: boolean;
  bold?: boolean;
}

export function Item({
  children,
  style,
  separator,
  secondary,
  bold,
}: PropsWithChildren<IProps>) {
  return (
    <Container style={style}>
      <Text secondary={secondary} bold={bold}>
        {children}
      </Text>
      {separator ? (
        <CircleSvg
          color={secondary ? theme.purple : theme.white}
          bold={bold}
          style={{ marginHorizontal: vw(1.5) }}
        />
      ) : null}
    </Container>
  );
}
