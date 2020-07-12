import React from 'react';
import {Animated} from 'react-native';
import {styles} from './style';
import {PanGestureHandler} from 'react-native-gesture-handler';

const Card = ({onPress, text, style}) => {
  const translateY = new Animated.Value(0);

  function onHandlerStateChanged(event) {

  }

  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        },
      },
    ],
    { useNativeDriver: true },
  );
  return (
    <PanGestureHandler
      onGestureEvent={animatedEvent}
      onHandlerStateChange={onHandlerStateChanged}>
      <Animated.View style={[styles.Container, {transform: [{translateY}]}]} />
    </PanGestureHandler>
  );
};

export {Card};
