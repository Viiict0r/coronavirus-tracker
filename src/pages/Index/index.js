/* eslint-disable global-require */

import React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';
import APP_VERSION from '../../config/version';

import { Container } from '../../components/Container';
import {
  TextContainer,
  Logo,
  TextLight,
  TextBold,
  ContainerButtons,
  Button,
  ButtonLayout,
  ButtonText,
  Version,
  Bottom,
  ButtonExclamation,
  BottomLayout,
} from './styles';

export default function Index({ navigation }) {
  return (
    <Container>
      <TextContainer>
        <TextBold>
          Corona <TextLight>Vírus</TextLight>
        </TextBold>
      </TextContainer>
      <Logo>
        <Image source={require('../../assets/img/logo.png')} />
      </Logo>
      <ContainerButtons>
        <ButtonLayout>
          <Button onPress={() => navigation.navigate('Statistics')}>
            <Image
              source={require('../../assets/img/logo.png')}
              style={{
                width: 59,
                height: 57,
              }}
            />
          </Button>
          <ButtonText>Estatísticas</ButtonText>
        </ButtonLayout>
        <ButtonLayout>
          <Button onPress={() => navigation.navigate('Mapa')}>
            <Image
              source={require('../../assets/img/pin.png')}
              style={{
                width: 59,
                height: 57,
              }}
            />
          </Button>
          <ButtonText>Mapa de casos</ButtonText>
        </ButtonLayout>
      </ContainerButtons>
      <Bottom>
        <BottomLayout size={10} />
        <BottomLayout size={80} style={{ alignItems: 'center' }}>
          <Version>Versão {APP_VERSION}</Version>
        </BottomLayout>
        <BottomLayout size={10}>
          <TouchableOpacity onPress={() => navigation.navigate('Credits')}>
            <ButtonExclamation
              style={{ width: 21, height: 21, borderRadius: 100 / 2 }}>
              <Text style={{ color: '#fff', fontSize: 15 }}>!</Text>
            </ButtonExclamation>
          </TouchableOpacity>
        </BottomLayout>
      </Bottom>
    </Container>
  );
}
