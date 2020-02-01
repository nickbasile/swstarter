import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import SearchPage from './pages/searchPage';
import ResultsPage from './pages/resultsPage';
import styles from './styles';

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
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'SWStarter',
      headerTitleStyle: styles.navTitle,
      headerStyle: styles.navBar,
      headerTintColor: styles.navBarActions.color,
      cardStyle: {
        backgroundColor: '#ffffff',
      },
    },
  },
);

export default createAppContainer(AppNavigator);
