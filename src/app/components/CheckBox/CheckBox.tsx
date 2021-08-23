import React, { PropsWithChildren } from 'react';

import { TouchableContainer, Container, Text } from './styles';
import { CheckBoxSvg } from '../../../assets/svgs';

interface IProps {
  setIsRememberingPassword?(value: boolean): void;
  size?: number;
  filled?: boolean;
}

export function CheckBox({
  children,
  setIsRememberingPassword,
  size,
  filled,
}: PropsWithChildren<IProps>) {
  return (
    <TouchableContainer
      onPress={() => {
        if (setIsRememberingPassword) setIsRememberingPassword(!filled);
      }}
    >
      <Container>
        <CheckBoxSvg filled={filled} size={size} />
        <Text filled={filled}>{children}</Text>
      </Container>
    </TouchableContainer>
  );
}
