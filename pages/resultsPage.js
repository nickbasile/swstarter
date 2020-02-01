import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from '../styles';

class ResultsPage extends Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    return {
      headerBackTitleVisible: false,
    };
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{margin: 30}}>
        <View style={styles.pageTitle}>
          <Text style={styles.headerPrimary}>Results</Text>
        </View>
        <View
          style={{alignItems: 'center', justifyContent: 'center', height: 300}}>
          <Text style={styles.textStatus}>Searching...</Text>
        </View>
      </View>
    );
  }
}

export default ResultsPage;
