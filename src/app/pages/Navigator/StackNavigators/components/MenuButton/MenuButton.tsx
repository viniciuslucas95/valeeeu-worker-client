import React from 'react';
import { Container } from './styles';
import { Touchable } from '../../../../../components';
import { MenuIcon } from '../../../../../../assets/svgs/icons';
import { StyleProp, ViewStyle } from 'react-native';
import { vw } from '../../../../../helpers/units';

interface IProps {
  style?: StyleProp<ViewStyle>;
}

export function MenuButton({ style }: IProps) {
  return (
    <Touchable
      onPress={() => console.log('Menu pressed')}
      style={[{ marginRight: vw(5) }, style]}
    >
      <Container>
        <MenuIcon />
      </Container>
    </Touchable>
  );
}
