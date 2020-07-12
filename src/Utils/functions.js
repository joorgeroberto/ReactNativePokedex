import {
  Dimensions,
} from 'react-native';
const {width, height} = Dimensions.get('window');

export function capitaliseFirstLetter(string) {
  let newString = string;
  if(string && string[0]) {
    newString = string[0].toUpperCase() + string.slice(1, string.length);
  }
  return newString;
}

export function returnId(id) {
  if (id < 10) {
    return `#00${id}`;
  } else if (id > 10 && id < 100) {
    return `#0${id}`;
  } else {
    return `#${id}`;
  }
}

export function returnType(type) {
  const return_object = {
    grass: require('../Assets/grass.png'),
    normal: require('../Assets/normal.png'),
    bug: require('../Assets/bug.png'),
    dark: require('../Assets/dark.png'),
    dragon: require('../Assets/dragon.png'),
    flying: require('../Assets/flying.png'),

    fairy: require('../Assets/fairy.png'),
    electric: require('../Assets/electric.png'),
    poison: require('../Assets/poison.png'),
    fire: require('../Assets/fire.png'),
    water: require('../Assets/water.png'),
    fight: require('../Assets/fight.png'),

    ground: require('../Assets/ground.png'),
    ghost: require('../Assets/ghost.png'),
    ice: require('../Assets/ice.png'),
    rock: require('../Assets/rock.png'),
    psychic: require('../Assets/psychic.png'),
    steel: require('../Assets/steel.png'),
  }
  return return_object[type];
}
