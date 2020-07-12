import React, {useEffect, useState} from 'react';
import {Animated, View, FlatList} from 'react-native';
import {styles} from './styles';
import {Header, PokemonHomeCard} from '../../Components';
import {connect} from 'react-redux';
import {getData} from '../../Store/Actions';

const Home = ({navigation, data, loading}) => {
  const [showPokemon, setShowPokemon] = useState(false);
  const [pokemonData, setPokemonData] = useState({});

  const onPress = (item) => {
    navigation.navigate('TypeScreen', {
      item: item,
      navigation: navigation,
    })
    //navigation.navigate('TypeScreen')
    /*setShowPokemon(true);
    setPokemonData(item);*/
  }

  return !showPokemon ? (
    <View style={styles.Container}>
      <Header />
      {data && data.length > 0 && data !== [] ? (
        <FlatList
          style={styles.FlatListStyle}
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => (
            <PokemonHomeCard data={item} onPress={() => onPress(item)} />
          )}
        />
      ) : null}
    </View>
  ) : (null
    /*<TypesScreen data={pokemonData} navigation={navigation} setData={setPokemonData} setShow={setShowPokemon}/>*/
  );
}

const mapStateToProps = (state) => {
  const {data, loading} = state.home;
  return {data, loading};
};

export default connect(mapStateToProps, {getData})(Home);
