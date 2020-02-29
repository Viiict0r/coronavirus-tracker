import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Index from './pages/Index';
import Statistics from './pages/Statistics';

import colors from './styles/colors';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Index: {
        screen: Index,
        navigationOptions: {
          headerShown: false,
        },
      },
      Statistics: {
        screen: Statistics,
        navigationOptions: Statistics.navigationOptions,
      },
    },
    {
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTintColor: colors.secondary,
      },
    }
  )
);

export default Routes;
