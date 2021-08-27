import { ImageSourcePropType } from 'react-native';

export interface IInfo {
  photo: ImageSourcePropType;
  name: string;
  job: string;
  category: string[];
  methods: string[];
  tags: string[];
  description: string;
}
