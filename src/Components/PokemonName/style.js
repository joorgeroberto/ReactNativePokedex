import {Animated} from 'react-native';
import styled from 'styled-components/native';
import Colors from '../../Config/Colors';
import {returnFont} from '../../Utils';

export const Name = styled(Animated.Text)`
  font-size: 22px;
  font-family: ${returnFont('book')};
  position: absolute;
  top: 40px;
  color: ${Colors.white}
`;
