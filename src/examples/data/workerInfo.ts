import { IWorkerInfo } from '../../app/interfaces';

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

export const workerInfo: IWorkerInfo = {
  photo: require('../images/photo.png'),
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
    require('../images/car.jpg'),
    require('../images/panicat.jpg'),
    require('../images/flower.jpg'),
    require('../images/mechanic.png'),
    require('../images/robots.jpg'),
    require('../images/house.jpg'),
  ],
};
