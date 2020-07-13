import React from 'react';
import {returnTypeImage} from '../../Utils';
import {Container, Name, TypeImage} from './style';

const NameContainer = ({style, name, type, panHandler}) => {
  return (
    <Container
      style={[
        style,
        {
          transform: [
            {
              scale: panHandler.interpolate({
                inputRange: [-100, 0, 100],
                outputRange: [0.5, 1, 1],
              }),
            },
            {
              translateY: panHandler.interpolate({
                inputRange: [-100, 0],
                outputRange: [-100, 0],
              }),}
          ],
          opacity: panHandler.interpolate({
            inputRange: [-100, 0, 100],
            outputRange: [0, 1, 1],
          }),
        }]}>
      <Name>{name}</Name>
      <TypeImage source={returnTypeImage(type)} />
    </Container>
  );
};

export {NameContainer};
