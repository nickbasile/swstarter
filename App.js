import React from 'react';
import {SafeAreaView} from 'react-native';

import SearchPage from './pages/searchPage';

const App = () => {
  return (
    <SafeAreaView style={{flexDirection: 'column', flex: 1}}>
      <SearchPage />
    </SafeAreaView>
  );
};

export default App;
