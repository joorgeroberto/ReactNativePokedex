import {
  Dimensions,
  Platform,
} from 'react-native';
import Colors from '../Config/Colors';

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
    grass: require('../Assets/Icons/grass.png'),
    normal: require('../Assets/Icons/normal.png'),
    bug: require('../Assets/Icons/bug.png'),
    dark: require('../Assets/Icons/dark.png'),
    dragon: require('../Assets/Icons/dragon.png'),
    flying: require('../Assets/Icons/flying.png'),

    fairy: require('../Assets/Icons/fairy.png'),
    electric: require('../Assets/Icons/electric.png'),
    poison: require('../Assets/Icons/poison.png'),
    fire: require('../Assets/Icons/fire.png'),
    water: require('../Assets/Icons/water.png'),
    fighting: require('../Assets/Icons/fight.png'),

    ground: require('../Assets/Icons/ground.png'),
    ghost: require('../Assets/Icons/ghost.png'),
    ice: require('../Assets/Icons/ice.png'),
    rock: require('../Assets/Icons/rock.png'),
    psychic: require('../Assets/Icons/psychic.png'),
    steel: require('../Assets/Icons/steel.png'),
  };
  return return_object[type];
}

export function returnTypeImage(type) {
  const return_object = {
    grass: require('../Assets/Tags/grass.png'),
    normal: require('../Assets/Tags/normal.png'),
    bug: require('../Assets/Tags/bug.png'),
    dark: require('../Assets/Tags/dark.png'),
    dragon: require('../Assets/Tags/dragon.png'),
    flying: require('../Assets/Tags/flying.png'),

    fairy: require('../Assets/Tags/fairy.png'),
    electric: require('../Assets/Tags/electric.png'),
    poison: require('../Assets/Tags/poison.png'),
    fire: require('../Assets/Tags/fire.png'),
    water: require('../Assets/Tags/water.png'),
    fighting: require('../Assets/Tags/fight.png'),

    ground: require('../Assets/Tags/ground.png'),
    ghost: require('../Assets/Tags/ghost.png'),
    ice: require('../Assets/Tags/ice.png'),
    rock: require('../Assets/Tags/rock.png'),
    psychic: require('../Assets/Tags/psychic.png'),
    steel: require('../Assets/Tags/steel.png'),
  };
  return return_object[type];
}

export function returnBackgroundColor(type) {
  const return_object = {
    grass: [Colors.grassBackgroundInitial, Colors.grassBackgroundEnd],
    normal: [Colors.normalBackgroundInitial, Colors.normalBackgroundEnd],
    bug: [Colors.bugBackgroundInitial, Colors.bugBackgroundEnd],
    dark: [Colors.darkBackgroundInitial, Colors.darkBackgroundEnd],
    dragon: [Colors.dragonBackgroundInitial, Colors.dragonBackgroundEnd],
    flying: [Colors.flyingBackgroundInitial, Colors.flyingBackgroundEnd],

    fairy: [Colors.fairyBackgroundInitial, Colors.fairyBackgroundEnd],
    electric: [Colors.electricBackgroundInitial, Colors.electricBackgroundEnd],
    poison: [Colors.poisonBackgroundInitial, Colors.poisonBackgroundEnd],
    fire: [Colors.fireBackgroundInitial, Colors.fireBackgroundEnd],
    water: [Colors.waterBackgroundInitial, Colors.waterBackgroundEnd],
    fighting: [Colors.fightingBackgroundInitial, Colors.fightingBackgroundEnd],

    ground: [Colors.groundBackgroundInitial, Colors.groundBackgroundEnd],
    ghost: [Colors.ghostBackgroundInitial, Colors.ghostBackgroundEnd],
    ice: [Colors.iceBackgroundInitial, Colors.iceBackgroundEnd],
    rock: [Colors.rockBackgroundInitial, Colors.rockBackgroundEnd],
    psychic: [Colors.psychicBackgroundInitial, Colors.psychicBackgroundEnd],
    steel: [Colors.steelBackgroundInitial, Colors.steelBackgroundEnd],
  };
  return return_object[type];
}

export const returnFont = (type) => {
  if(type === 'medium') {
    return Platform.OS === 'ios' ? 'Avenir-Medium' : 'AvenirLTStd-Medium';
  }
  if(type === 'book') {
    return Platform.OS === 'ios' ? 'Avenir-Book' : 'AvenirLTStd-Book';
  }
}
