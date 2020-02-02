import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {styles} from '../styles';

class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      searchScope: 'people',
    };
  }

  search = () => {
    if (this.state.searchTerm.length > 0) {
      return this.props.navigation.navigate('Results', this.state);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.textParagraph}>What are you searching for ?</Text>
          <View
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
            <View style={styles.radioGroup}>
              <TouchableOpacity
                style={
                  this.state.searchScope === 'people'
                    ? styles.radioChecked
                    : styles.radioEmpty
                }
                onPress={() => this.setState({searchScope: 'people'})}
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
        <View style={styles.buttonGroupBottom}>
          <TouchableOpacity
            style={
              this.state.searchTerm.length > 0
                ? styles.buttonActive
                : styles.buttonInactive
            }
            onPress={this.search}>
            <Text style={styles.textButton}>SEARCH</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default SearchPage;
