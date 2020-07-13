import {
  Dimensions,
} from 'react-native';
const {width, height} = Dimensions.get('window');
import {returnFont} from '../../Utils';
import {StyleSheet} from 'react-native';
import Colors from '../../Config/Colors';

export const styles = StyleSheet.create({
  Container: {
    width: width,
    height: height * ((145 * 100) / height / 100),
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: height * ((15 * 100) / height / 100),
    paddingLeft: width * ((16 * 100) / width / 100),
    paddingRight: width * ((16 * 100) / width / 100),
  },
  linearGradientContainer: {
    flex: 1,
    position: 'absolute',
    top: 0,
    width: width,
    height: height * ((145 * 100) / height / 100),
  },
  gradientOverlay: {
    position: 'absolute',
    top: 0,
    width: width,
    height: height * ((140 * 100) / height / 100),
    backgroundColor: Colors.gradientOverlay,
  },
  textStyle: {
    fontSize: 20,
    color: Colors.black,
    fontFamily: returnFont('medium'),
  },
});
