import React from 'react';
import {View, Text, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './style';
import Colors from '../../Config/Colors';

const Header = ({style}) => {
  const gradientColors = [
    Colors.headerFirst,
    Colors.headerSecond,
    Colors.headerThird,
    Colors.headerFourth,
  ];
  return (
    <View style={[styles.Container, {style}]}>
      <LinearGradient
        useAngle={true}
        angle={45}
        angleCenter={{x: 0.5, y: 0.5}}
        colors={gradientColors}
        style={styles.linearGradientContainer}
      />
      <View style={styles.gradientOverlay} />

      <Text style={styles.textStyle}>Pokemon</Text>
    </View>
  );
};

export {Header};
