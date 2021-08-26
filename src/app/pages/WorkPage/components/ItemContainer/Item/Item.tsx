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
}

export function Item({
  children,
  style,
  separator,
}: PropsWithChildren<IProps>) {
  return (
    <Container style={style}>
      <Text>{children}</Text>
      {separator ? (
        <CircleSvg color={theme.white} style={{ marginHorizontal: vw(1.5) }} />
      ) : null}
    </Container>
  );
}
