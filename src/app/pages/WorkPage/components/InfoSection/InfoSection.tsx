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
import { Unit } from '../../../../helpers';
import { ItemContainer } from '../ItemContainer';
import { Button } from '../../../components';
import { BoostIcon } from '../../../../../assets/svgs/icons';
import { colors } from '../../../../../configs/constants';
import { IWorkerInfo } from '../../../../interfaces';
import { Sizes } from '../../../components/enums';

const { vh, vw } = Unit;

export function InfoSection({
  photo,
  name,
  job,
  category,
  methods,
}: IWorkerInfo) {
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
            style={{ marginTop: vh(2), marginBottom: vh(1.5) }}
            size={Sizes.small}
            width={'100%'}
            isSecondary
            icon={
              <BoostIcon
                color={colors.purple}
                style={{ marginLeft: vw(2) }}
                size={Sizes.small}
              />
            }
            onPress={() => console.log('boost pressed')}
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
      <Button
        isSecondary
        style={{ marginTop: vh(2) }}
        onPress={() => console.log('edit profile pressed')}
      >
        Editar Perfil
      </Button>
    </Container>
  );
}
