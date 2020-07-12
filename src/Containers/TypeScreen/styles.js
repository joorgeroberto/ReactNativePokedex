import {StyleSheet} from 'react-native';
import {
  Dimensions,
} from 'react-native';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
const {width, height} = Dimensions.get('window');

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
