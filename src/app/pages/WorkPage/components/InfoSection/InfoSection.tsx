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
import { Unit } from '../../../../../shared/app/helpers';
import { BoostIcon } from '../../../../../shared/assets/svgs/icons';
import { colors } from '../../../../../shared/configs/constants';
import { IWorkerInfo } from '../../../../../shared/app/interfaces';
import {
  Button,
  HorizontalTextList,
} from '../../../../../shared/app/components';
import { Fonts, Sizes } from '../../../../../shared/app/enums';

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
      <HorizontalTextList
        texts={category}
        font={Fonts.regular}
        style={{ marginTop: vh(1.5) }}
      />
      <HorizontalTextList
        texts={methods}
        font={Fonts.lightItalic}
        style={{ marginVertical: vh(0.5) }}
      />
      <Button
        isSecondary
        style={{ marginTop: vh(1) }}
        onPress={() => console.log('edit profile pressed')}
      >
        Editar Perfil
      </Button>
    </Container>
  );
}
