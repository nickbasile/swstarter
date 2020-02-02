import React, {Component} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {styles} from '../styles';

class FilmPage extends Component {
  constructor(props) {
    super(props);
  }

  navigateToSearch = () => {
    return this.props.navigation.navigate('Home');
  };

  parseCharacters = () => {
    let allCharacters = JSON.parse(this.props.navigation.getParam('people'));
    let filmCharacters = JSON.parse(this.props.navigation.getParam('film')).characters;

    return allCharacters
      .filter(character => {
        return filmCharacters.includes(character.url);
      })
      .map(character => character.name)
      .join(', ');
  };

  render() {
    const film = JSON.parse(this.props.navigation.getParam('film'));
    return (
      <ScrollView style={styles.container}>
        <View style={{marginBottom: 30}}>
          <Text style={styles.headerPrimary}>{film.title}</Text>
        </View>
        <View style={styles.pageTitle}>
          <Text style={styles.headerSecondary}>Opening Crawl</Text>
        </View>
        <View style={{marginTop: 9.5}}>
          <Text style={styles.textParagraph}>{film.opening_crawl}</Text>
        </View>
        <View style={[styles.pageTitle, {marginTop: 30}]}>
          <Text style={styles.headerSecondary}>Characters</Text>
        </View>
        <View style={{marginTop: 9.5}}>
          <Text style={styles.textLink}>{this.parseCharacters()}</Text>
        </View>
        <View style={{marginVertical: 30}}>
          <TouchableOpacity
            style={styles.buttonActive}
            onPress={this.navigateToSearch}>
            <Text style={styles.textButton}>BACK TO SEARCH</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

export default FilmPage;
