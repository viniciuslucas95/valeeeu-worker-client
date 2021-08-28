import React from 'react';
import { colors } from '../../../../configs';
import { IStyleable, IHaveSize } from '../interfaces';
import { Container } from './styles';
import { Unit } from '../../../helpers';

const { vwPx } = Unit;

interface IProps extends IStyleable, Partial<IHaveSize> {
  placeholder: string;
  isSecure?: boolean;
}

export function Input({ placeholder, size, isSecure, style, width }: IProps) {
  return (
    <Container
      placeholder={placeholder}
      placeholderTextColor={colors.mediumGray}
      selectionColor={colors.purple}
      secureTextEntry={isSecure}
      width={width ?? vwPx(90)}
      size={size}
      style={style}
    ></Container>
  );
}
