import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from './style';

const Button = ({onPress, text, style}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.buttonStyle, style]}>
      <Text style={styles.textStyle}>{text}</Text>
    </TouchableOpacity>
  );
};

export {Button};
