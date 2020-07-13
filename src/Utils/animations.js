
import {Animated} from 'react-native';

export const fadeIn = (fadeAnim, duration) => {
  // Will change fadeAnim value to 1 in 5 seconds
  Animated.timing(fadeAnim, {
    toValue: 1,
    duration: duration ? duration : 300,
    useNativeDriver: true,
  }).start();
};

export const scrollUp = (anim, duration) => {
  // Will change fadeAnim value to 1 in 5 seconds
  Animated.timing(anim, {
    toValue: 1,
    delay: 200,
    duration: duration ? duration : 600,
    useNativeDriver: true,
  }).start();
};
export const scrollDown = (anim, duration) => {
  // Will change fadeAnim value to 1 in 5 seconds
  Animated.timing(anim, {
    toValue: 0,
    duration: duration ? duration : 600,
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
    outputRange: [600, 0],
  });

export const panTranslateY = (panHandler) =>
  panHandler.interpolate({
    inputRange: [-350, 0, 380],
    outputRange: [-100, 0, 380],
    extrapolate: 'clamp',
  });

export const menuScale = (fadeAnim) =>
  fadeAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0.5],
  });

