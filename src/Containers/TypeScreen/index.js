import React, {useEffect, useState, useRef} from 'react';
import {View, Text, BackHandler, Animated, Dimensions} from 'react-native';
import {styles, Container, ScrollUp, Image} from './styles';
import {NameContainer, PokemonName} from '../../Components';
const {width, height} = Dimensions.get('window');
import {
  returnBackgroundColor,
  fadeIn,
  fadeOut,
  translateY,
  scrollUp,
  scrollDown,
  panTranslateY,
} from '../../Utils';
import {PanGestureHandler, State} from 'react-native-gesture-handler';

const TypesScreen = ({navigation, pokemon, loading}) => {
  const [item, setItem] = useState(null);
  const [type, setType] = useState(null);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scrollAnim = useRef(new Animated.Value(0)).current;
  const panHandler = new Animated.Value(0);
  let offset = 0;


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
  }, []);

  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: panHandler,
        },
      },
    ],
    { useNativeDriver: true },
  );

  function onHandlerStateChanged(event) {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      const {translationY} = event.nativeEvent;
      let opened = true;
      offset += translationY;

      panHandler.setOffset(offset);
      panHandler.setValue(0);

      if (translationY >= 250) {
        //opened = false;

        backButtonHandler();
      }
    }
  }

  return item ? (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
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
      <PokemonName
        panHandler={panHandler}
        name={item.name}/>
      <PanGestureHandler
        onGestureEvent={animatedEvent}
        onHandlerStateChange={onHandlerStateChanged}
        style={{backgroundColor: 'red', flex: 1, width: width, height: height}}
      >
        <ScrollUp
          style={[
            [
              {
                transform: [
                  {translateY: translateY(scrollAnim)},
                  {
                    translateY: panTranslateY(panHandler),
                  },
                ],
              },
            ],
          ]}>
          <Image
            style={[
              styles.imageStyle,
              {
                transform: [
                  {
                    scale: panHandler.interpolate({
                      inputRange: [-100, 0, 100],
                      outputRange: [0, 1, 1],
                    }),
                  },
                ],
                opacity: panHandler.interpolate({
                  inputRange: [-100, 0, 100],
                  outputRange: [0, 1, 1],
                }),
              },
            ]}
            source={{
              uri: item.sprites.front_default,
            }}
          />
          <NameContainer
            panHandler={panHandler}
            name={item.name}
            type={type}
          />
        </ScrollUp>
      </PanGestureHandler>
    </View>
  ) : (
    <View style={styles.Container} />
  );
}

/*const mapStateToProps = (state) => {
  const {data, loading} = state.home;
  return {data, loading};
};

export default connect(mapStateToProps, {})(TypesScreen);*/
export default TypesScreen;
