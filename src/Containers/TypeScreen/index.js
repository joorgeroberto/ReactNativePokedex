import React, {useEffect, useState, useRef} from 'react';
import {View, Text, BackHandler, Animated} from 'react-native';
import {styles, Container} from './styles';
import {Button} from '../../Components';
import Colors from '../../Config/Colors';
import {returnBackgroundColor, fadeIn} from '../../Utils';
import {connect} from 'react-redux';
import {getData} from '../../Store/Actions';

const TypesScreen = ({navigation, pokemon, loading}) => {
  const [item, setItem] = useState(null);
  const [type, setType] = useState(null);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    fadeIn(fadeAnim);
    function backButtonHandler() {
      return navigation.navigate('Home');
    }
    BackHandler.addEventListener('hardwareBackPress', backButtonHandler);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', backButtonHandler);
    };
  }, [])
  useEffect(() => {
    if(navigation && navigation.state.params && navigation.state.params.item) {
      setItem(navigation.state.params.item);
      setType(navigation.state.params.item.types[0].type.name);
    }
  }, [])

  return item ? (
    <Animated.View
      style={[
        {
          opacity: fadeAnim,
        },
        {flex: 1},
      ]}>
      <Container
        useAngle={true}
        angle={45}
        angleCenter={{x: 0.5, y: 0.5}}
        colors={returnBackgroundColor(
          type,
        )}>
      </Container>
    </Animated.View>
  ) : (
    <View style={styles.Container}>
      <Text>Loading...</Text>
    </View>
  );
}

/*const mapStateToProps = (state) => {
  const {data, loading} = state.home;
  return {data, loading};
};

export default connect(mapStateToProps, {})(TypesScreen);*/
export default TypesScreen;
