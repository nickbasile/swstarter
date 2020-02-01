import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import styles from '../styles';

class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      searchScope: 'person',
    };
  }

  render() {
    return (
      <View>
        <View style={styles.headerNav}>
          <Text style={styles.pageTitle}>SWStarter</Text>
        </View>
        <View style={{margin: 30}}>
          <Text style={styles.textParagraph}>What are you searching for ?</Text>
          <View
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
            <View style={styles.radioGroup}>
              <TouchableOpacity
                style={
                  this.state.searchScope === 'person'
                    ? styles.radioChecked
                    : styles.radioEmpty
                }
                onPress={() => this.setState({searchScope: 'person'})}
              />
              <Text style={styles.textRadio}>People</Text>
            </View>
            <View style={styles.radioGroup}>
              <TouchableOpacity
                style={
                  this.state.searchScope === 'films'
                    ? styles.radioChecked
                    : styles.radioEmpty
                }
                onPress={() => this.setState({searchScope: 'films'})}
              />
              <Text style={styles.textRadio}>Movies</Text>
            </View>
          </View>
          <TextInput
            style={styles.input}
            onChangeText={text => this.setState({searchTerm: text})}
            value={this.state.searchTerm}
            placeholder="e.g. Chewbacca, Yoda"
          />
        </View>
      </View>
    );
  }
}

export default SearchPage;
