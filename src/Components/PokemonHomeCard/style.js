import {StyleSheet} from 'react-native';
import {returnFont} from '../../Utils';
import Colors from '../../Config/Colors';

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
    fontFamily: returnFont('medium'),
    color: Colors.nameColor,
  },
  numberStyle: {
    fontSize: 16,
    fontFamily: returnFont('book'),
    color: Colors.numberColor,
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
