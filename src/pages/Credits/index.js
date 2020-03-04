import React from 'react';
import { Linking } from 'react-native';
import { Container } from '../../components/Container';
import Header from '../../components/Header';

import { CreditsContainer, Title, Text, Url } from './styles';

export default function Credits() {
  function openLink(url) {
    try {
      Linking.openURL(url);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container>
      <CreditsContainer>
        <Title>Desenvolvido por</Title>

        <Text>Nicollas (Designer)</Text>
        <Url onPress={() => openLink('https://www.nicollas.com.br')}>
          www.nicollas.com.br
        </Url>

        <Text>Victor (Developer)</Text>
        <Url onPress={() => openLink('https://www.github.com/Viiict0r')}>
          www.github.com/Viiict0r
        </Url>

        <Title>Colaborador</Title>

        <Text>Wylliam Medeiros</Text>
        <Url onPress={() => openLink('https://www.instagram.com/wylliam.mkt/')}>
          @wylliam.mkt
        </Url>

        <Title>Fonte das informações</Title>

        <Text>Johns Hopkins CSSE</Text>
        <Url
          onPress={() =>
            openLink('https://www.github.com/CSSEGISandData/COVID-19')
          }>
          www.github.com/CSSEGISandData/COVID-19
        </Url>

        <Title>Atribuições</Title>

        <Url onPress={() => openLink('https://www.freepik.com')}>
          www.freepik.com
        </Url>
      </CreditsContainer>
    </Container>
  );
}
Credits.navigationOptions = ({ navigation }) => {
  return { header: () => <Header navigation={navigation} /> };
};
