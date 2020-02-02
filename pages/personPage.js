import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from '../styles';

class PersonPage extends Component {
  constructor(props) {
    super(props);
  }

  navigateToSearch = () => {
    return this.props.navigation.navigate('Home');
  };

  parseDetails = () => {
    const person = JSON.parse(this.props.navigation.getParam('person'));

    return [
      {
        label: 'Birth Year',
        value: person.birth_year,
      },
      {
        label: 'Gender',
        value: person.gender,
      },
      {
        label: 'Eye Color',
        value: person.eye_color,
      },
      {
        label: 'Hair Color',
        value: person.hair_color,
      },
      {
        label: 'Height',
        value: person.height,
      },
      {
        label: 'Mass',
        value: person.mass,
      },
    ];
  };

  parseFilms = () => {
    let allFilms = JSON.parse(this.props.navigation.getParam('films'));
    let personFilms = JSON.parse(this.props.navigation.getParam('person')).films;

    return allFilms
      .filter(film => {
        return personFilms.includes(film.url);
      })
      .map(film => film.title)
      .join(', ');
  };

  render() {
    const person = JSON.parse(this.props.navigation.getParam('person'));
    return (
      <View style={styles.container}>
        <View style={{marginBottom: 30}}>
          <Text style={styles.headerPrimary}>{person.name}</Text>
        </View>
        <View style={styles.pageTitle}>
          <Text style={styles.headerSecondary}>Details</Text>
        </View>
        <View style={{marginTop: 9.5}}>
          {this.parseDetails().map(detail => {
            return (
              <Text key={detail.label} style={styles.textParagraph}>{`${detail.label}: ${detail.value}`}</Text>
            );
          })}
        </View>
        <View style={[styles.pageTitle, {marginTop: 30}]}>
          <Text style={styles.headerSecondary}>Movies</Text>
        </View>
        <View style={{marginTop: 9.5}}>
          <Text style={styles.textLink}>{this.parseFilms()}</Text>
        </View>
        <View style={styles.buttonGroupBottom}>
          <TouchableOpacity
            style={styles.buttonActive}
            onPress={this.navigateToSearch}>
            <Text style={styles.textButton}>BACK TO SEARCH</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default PersonPage;
