import React, {Component} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {styles, baseStyles} from '../styles';
import * as api from '../api';

class ResultsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      searching: true,
    };
  }

  componentDidMount() {
    this.search();
  }

  search = () => {
    let navigation = this.props.navigation;
    return api
      .search(
        navigation.getParam('searchScope'),
        navigation.getParam('searchTerm'),
      )
      .then(response => {
        setTimeout(() => {
          this.setState({results: response.results, searching: false});
        }, 1000);
      })
      .catch(error => {
        //Add error handling
      });
  };

  navigateToSearch = () => {
    return this.props.navigation.navigate('Home', this.state);
  };

  navigateToResult = result => {
    let navigation = this.props.navigation;

    if (this.searchingForPerson()) {
      return navigation.navigate('Person', JSON.stringify(result));
    }

    return navigation.navigate('Film', JSON.stringify(result));
  };

  searchingForPerson = () => {
    return this.props.navigation.getParam('searchScope') === 'people';
  };

  noResults = () => {
    return this.state.searching === false && this.state.results.length <= 0;
  };

  hasResults = () => {
    return this.state.searching === false && this.state.results.length > 0;
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.pageTitle}>
          <Text style={styles.headerPrimary}>Results</Text>
        </View>
        {this.state.searching === true &&
          <View style={styles.statusMessage}>
            <Text style={styles.textStatus}>Searching...</Text>
          </View>
        }
        {this.noResults() &&
          <View style={{height: '100%'}}>
            <View style={styles.statusMessage}>
              <Text style={styles.textStatus}>There are zero matches.</Text>
              <Text style={styles.textStatus}>
                Use the form to search for People or Movies.
              </Text>
            </View>
            <View style={[styles.buttonGroupBottom, {bottom: 30}]}>
              <TouchableOpacity
                style={styles.buttonActive}
                onPress={this.navigateToSearch}>
                <Text style={styles.textButton}>BACK TO SEARCH</Text>
              </TouchableOpacity>
            </View>
          </View>
        }
        {this.hasResults() &&
          <ScrollView>
            {this.state.results.map((result, key) => {
              return (
                <View key={key} style={styles.result}>
                  <Text style={styles.headerSecondary}>
                    {this.searchingForPerson() ? result.name : result.title}
                  </Text>
                  <TouchableOpacity
                    style={[styles.buttonActive, {marginTop: 15}]}
                    onPress={this.navigateToResult(result)}>
                    <Text style={styles.textButton}>SEE DETAILS</Text>
                  </TouchableOpacity>
                </View>
              );
            })}
            <View style={{marginTop: 30, marginBottom: 60}}>
              <TouchableOpacity
                style={styles.buttonActive}
                onPress={this.navigateToSearch}>
                <Text style={styles.textButton}>BACK TO SEARCH</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        }
      </View>
    );
  }
}

export default ResultsPage;
