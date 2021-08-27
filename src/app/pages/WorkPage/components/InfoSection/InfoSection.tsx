import React from 'react';
import {
  Container,
  Photo,
  PictureAndNameContainer,
  Name,
  NameContainer,
  Job,
  TitleAndItemContainer,
  Title,
} from './styles';
import { vh, vw } from '../../../../helpers/units';
import { ItemContainer } from '../ItemContainer';
import { Button } from '../../../../components';
import { IInfo } from '../../interfaces';
import { BoostIcon } from '../../../../../assets/svgs/icons';
import { theme } from '../../../../../configs/constants';

export function InfoSection({ photo, name, job, category, methods }: IInfo) {
  return (
    <Container>
      <PictureAndNameContainer>
        <Photo source={photo} />
        <NameContainer>
          <Name numberOfLines={1} ellipsizeMode='tail'>
            {name}
          </Name>
          <Job numberOfLines={1} ellipsizeMode='tail'>
            {job}
          </Job>
          <Button
            style={{ marginTop: vh(2) }}
            small
            width={'100%'}
            secondary
            icon={
              <BoostIcon
                color={theme.purple}
                style={{ marginLeft: vw(2) }}
                small
              />
            }
          >
            Impulsionar
          </Button>
        </NameContainer>
      </PictureAndNameContainer>
      <TitleAndItemContainer style={{ marginTop: vh(1.5) }}>
        <Title>Categorias</Title>
        <ItemContainer children={category} />
      </TitleAndItemContainer>
      <TitleAndItemContainer style={{ marginTop: vh(1.5) }}>
        <Title>Métodos</Title>
        <ItemContainer children={methods} />
      </TitleAndItemContainer>
      <Button secondary style={{ marginTop: vh(2) }}>
        Editar Perfil
      </Button>
    </Container>
  );
}
