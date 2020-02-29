/* eslint-disable global-require */
import React from 'react';
import { Image } from 'react-native';

import { Container, Layout, BackButton } from './styles';

export default function Header({ navigation }) {
  return (
    <Container>
      <Layout>
        <BackButton onPress={() => navigation.goBack()}>
          <Image
            source={require('../../assets/img/arrow_back.png')}
            style={{
              width: 28,
              height: 28,
            }}
          />
        </BackButton>
      </Layout>
      <Layout style={{ alignItems: 'center' }}>
        <Image
          source={require('../../assets/img/logo.png')}
          style={{
            width: 48,
            height: 48,
          }}
        />
      </Layout>
      <Layout />
    </Container>
  );
}
