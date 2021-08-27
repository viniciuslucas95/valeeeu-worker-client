import React from 'react';
import { FlatListContainer } from './styles';
import { IInfo } from './interfaces';
import {
  TagSection,
  PictureSection,
  InfoSection,
  DescriptionSection,
} from './components';

enum CategoryTypes {
  services = 'Presta serviços',
  sales = 'Vende produtos',
}

enum MethodTypes {
  customerLocation = 'Vai ao cliente',
  workerLocation = 'Cliente vai ao local',
  delivery = 'Por envio',
  virtual = 'Virtual',
}

// FOR TESTING
const photo = require('../../../test/data/photo.png');
const info: IInfo = {
  photo: photo,
  name: 'Flávio Hamilton Stronda',
  job: 'Cuidador de velhas ricas',
  category: [CategoryTypes.services, CategoryTypes.sales],
  methods: [
    MethodTypes.customerLocation,
    MethodTypes.workerLocation,
    MethodTypes.delivery,
    MethodTypes.virtual,
  ],
  tags: ['gigolo', 'prostituto', 'digdin', 'shunaider', 'drauzio', 'blastoise'],
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
};

export function WorkPage() {
  const page = [
    <InfoSection {...info} />,
    <TagSection tags={info.tags} />,
    <PictureSection />,
    <DescriptionSection text={info.description} />,
  ];

  return (
    <FlatListContainer
      data={page}
      keyExtractor={(_, index) => index.toString()}
      renderItem={({ item }) => <>{item}</>}
    ></FlatListContainer>
  );
}
