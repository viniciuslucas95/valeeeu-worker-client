import React, { useState } from 'react';
import { Container, TouchableContainer, ToggleContainer } from './styles';
import { ToggleSvg } from '../../../assets/svgs';

interface IProps {
  activeColor?: string;
  inactiveColor?: string;
  setToggleValue?(value: boolean): void;
  style?: any;
  size?: number;
}

export function Toggle({
  style,
  setToggleValue,
  size,
  activeColor,
  inactiveColor,
}: IProps) {
  const [isActive, setIsActive] = useState(false);

  function changeToggle() {
    const newValue = !isActive;
    setIsActive(newValue);

    if (setToggleValue) setToggleValue(newValue);
  }

  return (
    <Container {...style}>
      <TouchableContainer onPress={changeToggle}>
        <ToggleContainer>
          <ToggleSvg
            isActive={isActive}
            activeColor={activeColor}
            inactiveColor={inactiveColor}
            size={size}
          />
        </ToggleContainer>
      </TouchableContainer>
    </Container>
  );
}
