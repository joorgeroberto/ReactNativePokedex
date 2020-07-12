import {
  Dimensions,
} from 'react-native';
const {width, height} = Dimensions.get('window');
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  Container: {
    width: '100%',
    paddingTop: 12,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    flexDirection: 'row',
  },
  imageStyle: {
    width: 70,
    height: 70,
  },
  nameContainer: {
    marginLeft: 15,
    justifyContent: 'center',
  },
  nameStyle: {
    fontSize: 19,
    fontWeight: '600',
  },
  typesContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginRight: 5,
  },
  typeImageStyle: {
    width: 70,
    height: 70,
    marginRight: -10,
    marginLeft: -10,
  },
  infoContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
  },
});
