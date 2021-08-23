import React from 'react';

import { theme } from '../../../configs/constants';
import { Container } from './styles';
import { Sizes } from '../enums';

interface IProps {
  placeholder?: string;
  size?: Sizes;
  isSecure?: boolean;
  style?: any;
}

export function Input({ placeholder, size, isSecure, style }: IProps) {
  return (
    <Container
      {...style}
      placeholder={placeholder}
      placeholderTextColor={theme.mediumGray}
      selectionColor={theme.purple}
      secureTextEntry={isSecure}
      size={size}
    ></Container>
  );
}
