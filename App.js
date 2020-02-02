import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import SearchPage from './pages/searchPage';
import ResultsPage from './pages/resultsPage';
import PersonPage from './pages/personPage';
import FilmPage from './pages/filmPage';
import {styles, baseStyles} from './styles';

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: SearchPage,
    },
    Results: {
      screen: ResultsPage,
      navigationOptions: {
        headerBackTitleVisible: false,
      },
    },
    Person: {
      screen: PersonPage,
      navigationOptions: {
        headerBackTitleVisible: false,
      },
    },
    Film: {
      screen: FilmPage,
      navigationOptions: {
        headerBackTitleVisible: false,
      },
    },
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'SWStarter',
      headerTitleStyle: styles.navTitle,
      headerStyle: styles.navBar,
      headerTintColor: baseStyles.colors.green,
      cardStyle: {
        backgroundColor: '#ffffff',
      },
      headerBackTitleStyle: {
        padding: 30,
      },
    },
  },
);

export default createAppContainer(AppNavigator);
