import React, {Component} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import styles from './styles';

class SearchPage extends Component {
  render() {
    return (
      <View>
        <Text style={styles.pageTitle}>SWStarter</Text>
      </View>
    );
  }
}

const App = () => {
  return (
    <SafeAreaView>
      <SearchPage />
    </SafeAreaView>
  );
};

export default App;
