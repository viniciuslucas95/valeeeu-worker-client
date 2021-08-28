import React, { PropsWithChildren } from 'react';
import { TouchableContainer, Container, Text } from './styles';
import { CheckBoxSvg } from '../../../../../assets/svgs';

interface IProps {
  onPress?(value: boolean): void;
  size?: number;
  isChecked?: boolean;
}

export function CheckBox({
  children,
  onPress,
  size,
  isChecked,
}: PropsWithChildren<IProps>) {
  return (
    <TouchableContainer
      onPress={() => {
        if (onPress) onPress(!isChecked);
      }}
    >
      <Container>
        <CheckBoxSvg isChecked={isChecked} size={size} />
        <Text isChecked={isChecked}>{children}</Text>
      </Container>
    </TouchableContainer>
  );
}
