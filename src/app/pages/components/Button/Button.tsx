import React, { PropsWithChildren, useState } from 'react';
import { Sizes } from '../enums';
import { IStyleable, IPressable, IColorable, IHaveSize } from '../interfaces';
import { TouchableContainer, ButtonContainer, Text, Container } from './styles';
import { Unit } from '../../../helpers';

const { vwPx } = Unit;

interface IProps
  extends IStyleable,
    IPressable,
    IColorable,
    Partial<IHaveSize> {
  icon?: object;
  children: string;
}

export function Button({
  children,
  onPress,
  style,
  width,
  isSecondary,
  size,
  icon,
}: PropsWithChildren<IProps>) {
  const [isHighlighting, setIsHighlighting] = useState(false);

  return (
    <Container style={style}>
      <TouchableContainer
        onPressIn={() => setIsHighlighting(true)}
        onPressOut={() => setIsHighlighting(false)}
        onPress={() => {
          if (onPress) onPress();
        }}
      >
        <ButtonContainer
          isSecondary={isSecondary}
          highlight={isHighlighting}
          width={width ?? vwPx(90)}
          size={size ?? Sizes.medium}
        >
          <Text
            isSecondary={isSecondary}
            size={size ?? Sizes.medium}
            highlight={isHighlighting}
          >
            {children}
          </Text>
          {icon}
        </ButtonContainer>
      </TouchableContainer>
    </Container>
  );
}
