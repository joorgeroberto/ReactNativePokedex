
import {Animated} from 'react-native';

export const fadeIn = (fadeAnim, duration) => {
  // Will change fadeAnim value to 1 in 5 seconds
  Animated.timing(fadeAnim, {
    toValue: 1,
    duration: duration ? duration : 1000,
    useNativeDriver: true,
  }).start();
};

export const fadeOut = (fadeAnim) => {
  // Will change fadeAnim value to 1 in 5 seconds
  Animated.timing(fadeAnim, {
    toValue: 0,
    duration: 1000,
    useNativeDriver: true,
  }).start();
};

export const translateY = (fadeAnim) =>
  fadeAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [300, 0],
  });

export const menuScale = (fadeAnim) =>
  fadeAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0.5],
  });

