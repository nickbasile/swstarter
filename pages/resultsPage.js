import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from '../styles';
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
        console.log(response.results);
        setTimeout(() => {
          this.setState({results: response.results, searching: false});
        }, 1000);
      })
      .catch(error => {
        //Add error handling
      });
  };

  backToSearch = () => {
    return this.props.navigation.navigate('Home', this.state);
  }

  render() {
    return (
      <View style={{margin: 30, flexDirection: 'column', height: '100%'}}>
        <View style={styles.pageTitle}>
          <Text style={styles.headerPrimary}>Results</Text>
        </View>
        {this.state.searching === true &&
          <View
            style={{alignItems: 'center', justifyContent: 'center', height: 300}}>
            <Text style={styles.textStatus}>Searching...</Text>
          </View>
        }
        {this.state.searching === false && this.state.results.length <= 0 &&
          <View
            style={{alignItems: 'center', justifyContent: 'center', height: 300}}>
            <Text style={styles.textStatus}>There are zero matches.</Text>
            <Text style={styles.textStatus}>
              Use the form to search for People or Movies.
            </Text>
          </View>
        }
        {this.state.searching === false && this.state.results.length <= 0 &&
          <View
            style={{
              position: 'absolute',
              bottom: 0,
              paddingBottom: 60,
              alignItems: 'center',
              width: '100%',
            }}>
            <TouchableOpacity
                style={styles.buttonActive}
                onPress={this.backToSearch}>
                <Text style={styles.textButton}>BACK TO SEARCH</Text>
              </TouchableOpacity>
          </View>
        }
      </View>
    );
  }
}

export default ResultsPage;
