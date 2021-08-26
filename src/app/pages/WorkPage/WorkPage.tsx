import React from 'react';
import { Container, ScrollViewContainer } from './styles';
import { InfoContainer } from './components';
import { IInfo } from './components/InfoContainer';

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

const photo = require('../../../test/data/photo.png');

const info: IInfo = {
  photo: photo,
  name: 'Pet Stronda',
  job: 'Gigolô',
  category: [CategoryTypes.services, CategoryTypes.sales],
  methods: [
    MethodTypes.customerLocation,
    MethodTypes.workerLocation,
    MethodTypes.delivery,
    MethodTypes.virtual,
  ],
};

export function WorkPage() {
  return (
    <Container>
      <ScrollViewContainer>
        <InfoContainer {...info} />
      </ScrollViewContainer>
    </Container>
  );
}
