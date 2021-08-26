import React from 'react';
import {
  Container,
  Photo,
  PictureAndNameContainer,
  Name,
  NameContainer,
} from './styles';
import { Section } from './Section';
import { vh } from '../../../../helpers/units';
import { ImageSourcePropType } from 'react-native';
import { ItemContainer } from '../ItemContainer';

export interface IInfo {
  photo: ImageSourcePropType;
  name: string;
  job: string;
  category: string[];
  methods: string[];
}

export function InfoContainer({ photo, name, job, category, methods }: IInfo) {
  return (
    <Container>
      <PictureAndNameContainer>
        <Photo source={photo} />
        <NameContainer>
          <Name numberOfLines={1} ellipsizeMode='tail'>
            {name}
          </Name>
        </NameContainer>
      </PictureAndNameContainer>
      <Section title='Profissão' style={{ marginTop: vh(2) }}>
        {job}
      </Section>
      <Section title='Categorias' style={{ marginTop: vh(1.5) }}>
        <ItemContainer children={category} />
      </Section>
      <Section title='Métodos' style={{ marginTop: vh(1.5) }}>
        <ItemContainer children={methods} />
      </Section>
    </Container>
  );
}
