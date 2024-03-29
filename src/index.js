import React from 'react';
import { StatusBar } from 'react-native';

import colors from './styles/colors';
import Routes from './routes';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={colors.primary} />
      <Routes />
    </>
  );
}
