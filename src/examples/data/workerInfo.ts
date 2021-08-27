import { IInfo } from '../../app/interfaces';

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

export const workerInfo: IInfo = {
  photo: require('../../../test/data/photo.png'),
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
  pictures: [
    require('../../../../../test/data/car.jpg'),
    require('../../../../../test/data/panicat.jpg'),
    require('../../../../../test/data/flower.jpg'),
    require('../../../../../test/data/mechanic.png'),
    require('../../../../../test/data/robots.jpg'),
    require('../../../../../test/data/house.jpg'),
  ],
};
