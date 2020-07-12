/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import 'react-native-gesture-handler';
import React from 'react';
import {
  StyleSheet,
  StatusBar,
  SafeAreaView,
  LogBox,
} from 'react-native';
import Routes from './Config/Routes';
import {store, persistor} from './Store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

LogBox.ignoreLogs([
  'Warning',
]);

const App = () => {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <StatusBar barStyle="dark-content" backgroundColor={'transparent'} />
          <SafeAreaView style={{flex: 1}}>
            <Routes />
          </SafeAreaView>
        </PersistGate>
      </Provider>
    </>
  );
};

export default App;
