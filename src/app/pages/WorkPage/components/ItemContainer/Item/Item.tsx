import React, { PropsWithChildren } from 'react';
import { Container, Text } from './styles';
import { CircleSvg } from '../../../../../../assets/svgs/CircleSvg';
import { colors } from '../../../../../../configs/constants';
import { Unit } from '../../../../../helpers';
import { IColorable, IStyleable } from '../../../../components/interfaces';
import { IHaveBoldText } from '../interface';

const { vw, vh } = Unit;

interface IProps extends IStyleable, IColorable, IHaveBoldText {
  children: string;
  hasSeparator?: boolean;
}

export function Item({
  children,
  style,
  hasSeparator,
  isSecondary,
  isTextBold,
}: PropsWithChildren<IProps>) {
  return (
    <Container style={style}>
      <Text isSecondary={isSecondary} isTextBold={isTextBold}>
        {children}
      </Text>
      {hasSeparator ? (
        <CircleSvg
          color={isSecondary ? colors.purple : colors.white}
          style={{
            marginHorizontal: vw(1.5),
            top: isTextBold ? vh(0.2) : vh(0.1),
          }}
        />
      ) : null}
    </Container>
  );
}
