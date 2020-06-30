import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from './src/Home';

const navigator = createStackNavigator(
  {
    Home: Home,
  },
  {
    defaultNavigationOptions: {headerShown: false},
  },
);

export default createAppContainer(navigator);
