import {
  GET_DATA,
  GET_DATA_SUCCESS,
  GET_DATA_FAIL,
} from './types.js';

import Api from '../../Config/Api';
import {capitaliseFirstLetter, addNumber} from '../../Utils';

export const getData = ({data, navigation}) => {
  return (dispatch) => {
    dispatch({type: GET_DATA});
    async function loadData(newData, newNumber) {
      await Api.get(
        `/pokemon/${newNumber}`,
        {},{
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
        .then((res) => {
          let editedData = res.data;
          editedData.name = capitaliseFirstLetter(editedData.name);
          let dispatchData = newData.concat([editedData]);
          if (newNumber + 1 <= 30) {
            loadData(dispatchData, newNumber + 1);
          } else {
            //console.log(dispatchData)
            dispatch({
              type: GET_DATA_SUCCESS,
              payload: dispatchData,
            });
            navigation.navigate('Home');
          }
        })
        .catch((error) => {
          console.error(error);
          dispatch({type: GET_DATA_FAIL});
        });
    }
    if (data && data.length < 1) {
      console.log('baixou')
      loadData(data, 1);
    } else {
      console.log('pulou', data)
      dispatch({
        type: GET_DATA_SUCCESS,
        payload: data,
      });
      navigation.navigate('Home');
    }
  };
};
