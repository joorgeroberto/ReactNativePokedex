import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {Button} from '../../Components';
import {getData} from '../../Actions';
import {connect} from 'react-redux';

const InitialScreen = ({navigation, loading, data, getData}) => {
  let [cont, setCont] = useState(0);
  useEffect(() => {
    getData({number: cont, data: data, navigation: navigation})
  }, []);
  return (
    loading ? (
    <View style={styles.Container}>
      <Text>Loading...</Text>
    </View>
  ) : (
    <View style={styles.Container}>
      <Button
        onPress={() => {
          setCont(cont + 1);
        }}
        text={'Home Screen'}
      />
    </View>
  ))
}

const mapStateToProps = (state) => {
  const {data, loading} = state.home;
  return {data, loading};
};

export default connect(mapStateToProps, {getData})(InitialScreen);
