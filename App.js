import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';

import Store from './src/store'

import { Header, CryptoContainer } from './src/components/index'

export default class App extends React.Component {


  render() {

    return (
      <Provider store={Store}>
        <View>
          <Header />
          <CryptoContainer />
        </View>
      </Provider>
    );
  }
}
