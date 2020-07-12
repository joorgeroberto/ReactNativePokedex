import {
  Dimensions,
} from 'react-native';
const {width, height} = Dimensions.get('window');
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  Container: {
    width: width * 0.8,
    height: width * 0.8,
    backgroundColor: '#6F5199',
    borderRadius: 10,
    position: 'absolute',
    top: 100,
  },
});
