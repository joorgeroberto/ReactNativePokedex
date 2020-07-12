import ReduxThunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import {persistStore, persistReducer, getStoredState} from 'redux-persist';
import FilesystemStorage from 'redux-persist-filesystem-storage';

import rootReducer from './Reducers';

const persistConfig = {
  key: 'root',
  storage: FilesystemStorage,
  whitelist: ['home'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, {}, applyMiddleware(ReduxThunk));

console.log(FilesystemStorage)
const persistor = persistStore(store);

export {store, persistor};
