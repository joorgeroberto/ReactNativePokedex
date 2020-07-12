import React, {useEffect} from 'react';
import {Animated, View, FlatList} from 'react-native';
import {styles} from './styles';
import {Header, PokemonHomeCard} from '../../Components';
import {connect} from 'react-redux';
import {getData} from '../../Actions';

const Home = ({navigation, data, loading}) => {
  return (
    <View style={styles.Container}>
      <Header />
      {data && data.length ?
        <FlatList
          style={styles.FlatListStyle}
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => <PokemonHomeCard data={item} />}
        />
      : null
      }
    </View>
  );
}

const mapStateToProps = (state) => {
  const {data, loading} = state.home;
  return {data, loading};
};

export default connect(mapStateToProps, {getData})(Home);
