import {
  Dimensions,
} from 'react-native';
import Colors from '../Config/Colors';
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
