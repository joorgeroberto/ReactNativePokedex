import React from 'react';
import {TouchableOpacity, Text, Image, View} from 'react-native';
import {styles} from './style';
import {returnId, returnType} from '../../Utils';

const PokemonHomeCard = ({onPress, text, style, data}) => {
  return data && data.name && data.sprites && data.types ? (
    <TouchableOpacity onPress={onPress} style={[styles.Container, {style}]}>
      <Image
        style={styles.imageStyle}
        source={{
          uri: data.sprites.front_default,
        }}
      />
      <View style={styles.infoContainer}>
        <View style={styles.nameContainer}>
          <Text style={styles.nameStyle}>{data.name}</Text>
          <Text style={styles.numberStyle}>{returnId(data.id)}</Text>
        </View>
        <View style={styles.typesContainer}>
          {data.types.map(({type}) =>
            <Image
              key={`${type.name + data.id}`}
              style={styles.typeImageStyle}
              resizeMode={'contain'}
              source={returnType(type.name)}
            />
          )}
        </View>
      </View>
    </TouchableOpacity>
  ) : null;
};

export {PokemonHomeCard};
