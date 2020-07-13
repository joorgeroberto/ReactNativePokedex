import {Animated} from 'react-native';
import styled from 'styled-components/native';
import Colors from '../../Config/Colors';
import {returnFont} from '../../Utils';

export const Container = styled(Animated.View)`
  width: 100%;
  margin-top: 80px;
  justify-content: center;
  align-items: center;
`;

export const Name = styled.Text`
  font-size: 40px;
  font-family: ${returnFont('book')};
`;

export const TypeImage = styled.Image`
  width: 150px;
  height: 70px;
  margin-top: 0px;
`;
