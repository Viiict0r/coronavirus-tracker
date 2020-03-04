import { createAppContainer } from 'react-navigation';
import {
  createStackNavigator,
  TransitionSpecs,
  CardStyleInterpolators,
} from 'react-navigation-stack';

import Index from './pages/Index';
import Statistics from './pages/Statistics';
import Mapa from './pages/Mapa';
import Credits from './pages/Credits';

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
      Credits: {
        screen: Credits,
        navigationOptions: Credits.navigationOptions,
      },
    },
    {
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTintColor: colors.secondary,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        transitionSpec: {
          open: TransitionSpecs.TransitionIOSSpec,
          close: TransitionSpecs.TransitionIOSSpec,
        },
      },
    }
  )
);

export default Routes;
