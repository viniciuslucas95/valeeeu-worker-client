import { ImageSourcePropType } from 'react-native';

export interface IWorkerInfo {
  photo: ImageSourcePropType;
  name: string;
  job: string;
  category: string[];
  methods: string[];
  tags: string[];
  description: string;
  pictures: ImageSourcePropType[];
}
