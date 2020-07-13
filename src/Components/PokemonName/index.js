import React from 'react';
import {returnTypeImage} from '../../Utils';
import {Name} from './style';

const PokemonName = ({style, name, panHandler}) => {
  return (
    <Name
      style={{
        opacity: panHandler.interpolate({
          inputRange: [-200, 0, 100],
          outputRange: [1, 0, 0],
        }),
      }}>
      {name}
    </Name>
  );
};

export {PokemonName};
