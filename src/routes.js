import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Index from './pages/Index';
import Statistics from './pages/Statistics';
import Mapa from './pages/Mapa';

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
      Mapa: {
        screen: Mapa,
        navigationOptions: Mapa.navigationOptions,
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
