import React, {useEffect, useState, useRef} from 'react';
import {View, Text, BackHandler, Animated, Dimensions} from 'react-native';
import {styles, Container, ScrollUp, Image} from './styles';
import {Button} from '../../Components';
import Colors from '../../Config/Colors';
const {width, height} = Dimensions.get('window');
import {returnBackgroundColor, fadeIn, fadeOut, translateY, scrollUp, scrollDown} from '../../Utils';
import {connect} from 'react-redux';
import {getData} from '../../Store/Actions';

const TypesScreen = ({navigation, pokemon, loading}) => {
  const [item, setItem] = useState(null);
  const [type, setType] = useState(null);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scrollAnim = useRef(new Animated.Value(0)).current;


  function backButtonHandler() {
    fadeOut(fadeAnim);
    scrollDown(scrollAnim);
    setTimeout(function() {
      return navigation.navigate('Home');
    }, 500);
    return true;
  }

  useEffect(() => {
    fadeIn(fadeAnim);
    scrollUp(scrollAnim)
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
    <View style={{flex: 1}}>
      <Animated.View
        style={[
          {
            opacity: fadeAnim,
          },
          {width: width, height: height},
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
      <ScrollUp
        style={[
          [
            {
              transform: [{translateY: translateY(scrollAnim)}],
            },
          ],
        ]}>
        <Image
          style={styles.imageStyle}
          source={{
            uri: item.sprites.front_default,
          }}
        />
        {/*<Text>{item.name}</Text>*/}
      </ScrollUp>
    </View>
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
