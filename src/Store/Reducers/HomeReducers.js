import {
  GET_DATA,
  GET_DATA_FAIL,
  GET_DATA_SUCCESS,
} from '../Actions/types.js';

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_DATA: {
      return {
        ...state,
        error: false,
        loading: true,
      };
    }
    case GET_DATA_SUCCESS: {
      return {
        ...state,
        error: false,
        loading: false,
        data: action.payload,
      };
    }
    case GET_DATA_FAIL: {
      return {
        ...state,
        error: true,
        loading: false,
      };
    }
    default:
      return state;
  }
};
