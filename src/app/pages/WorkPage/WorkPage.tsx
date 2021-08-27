import React from 'react';
import { FlatListContainer } from './styles';
import {
  TagSection,
  PictureSection,
  InfoSection,
  DescriptionSection,
} from './components';
import { workerInfo } from '../../../examples/data';

export function WorkPage() {
  const page = [
    <InfoSection {...workerInfo} />,
    <TagSection tags={workerInfo.tags} />,
    <PictureSection pictures={workerInfo.pictures} />,
    <DescriptionSection text={workerInfo.description} />,
  ];

  return (
    <FlatListContainer
      data={page}
      keyExtractor={(_, index) => index.toString()}
      renderItem={({ item }) => <>{item}</>}
    ></FlatListContainer>
  );
}
