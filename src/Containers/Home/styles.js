import {StyleSheet} from 'react-native';
import {
  Dimensions,
} from 'react-native';
const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  Container: {
    flex: 1,
    width: '100%',
    //justifyContent: 'center',
    alignItems: 'center',
  },
  FlatListStyle: {
    width: '100%',
    height: '100%',
    paddingLeft: 16,
  },
});
