import React from 'react';
import {SafeAreaView} from 'react-native';
import VendedoresScreen from './src/screens-2/VendorScreen';

export const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <VendedoresScreen />
    </SafeAreaView>
  );
};
