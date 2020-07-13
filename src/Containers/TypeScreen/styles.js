import {StyleSheet} from 'react-native';
import {
  Dimensions, Animated,
} from 'react-native';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
const {width, height} = Dimensions.get('window');
import { PanGestureHandler, State } from 'react-native-gesture-handler';

export const styles = StyleSheet.create({
  Container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const Container = styled(LinearGradient)`
  flex: 1;
`;

export const Image = styled(Animated.Image)`
  width: ${height * ((200 * 100) / height / 100)}px;
  height: ${height * ((200 * 100) / height / 100)}px;
  position: absolute;
  top: -${height * ((100 * 100) / height / 100)}px;
`;

export const ScrollUp = styled(Animated.View)`
  height: ${height - 100}px;
  z-index: 10;
  position: absolute;
  top: ${height * ((178 * 100) / height / 100)}px;
  border-top-right-radius: 50px;
  border-top-left-radius: 50px;
  width: 100%;
  background-color: #FFF;
  flex: 1;
  flex-direction: column;
  align-items: center;
`;
