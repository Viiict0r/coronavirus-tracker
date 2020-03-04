/* eslint-disable global-require */
/* eslint-disable no-param-reassign */

import React, { useEffect, useState } from 'react';
import MapView, { Marker, Callout } from 'react-native-maps';
// import MapView from 'react-native-map-clustering';
import {
  StyleSheet,
  Image,
  Alert,
  View,
  ActivityIndicator,
} from 'react-native';
import Header from '../../components/Header';
import colors from '../../styles/colors';
import api from '../../services/api';

import {
  Container,
  Title,
  TitleContainer,
  Details,
  DetailText,
  DetailTextValue,
  DetailContainer,
  DetailTitle,
} from './styles';

export default function Mapa() {
  const [loading, setLoading] = useState(true);
  const [values, setValues] = useState([]);
  const [selectedData, setSelectedData] = useState(null);
  const [displayInfos, setDisplayInfos] = useState(false);

  async function handleData() {
    setLoading(true);

    try {
      const { data } = await api.get('coords');

      setValues(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      Alert.alert('Erro', 'Não foi possível obter informações do servidor.');
    }
  }

  function handleRegionChanged(region) {
    setDisplayInfos(false);
    setSelectedData(null);
  }

  function handleSelect(obj) {
    setSelectedData(obj);
    setDisplayInfos(true);
  }

  function numberWithCommas(x) {
    const parts = x.toString().split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    return parts.join(',');
  }

  useEffect(() => {
    handleData();
  }, []);

  return (
    <Container>
      <TitleContainer>
        <Title>Mapa de casos:</Title>
      </TitleContainer>
      {loading ? (
        <View
          style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
          <ActivityIndicator size="large" color={colors.secondary} />
        </View>
      ) : (
        <>
          <MapView
            maxDelta={900}
            style={styles.map}
            onRegionChangeComplete={handleRegionChanged}
            cacheEnabled
            rotateEnabled={false}
            moveOnMarkerPress={false}
            initialRegion={{
              longitude: -59.21405486762524,
              latitude: -16.932940136729304,
              latitudeDelta: 300,
              longitudeDelta: 300,
            }}>
            {values.map(obj => {
              const latitude = Number(obj.latitude);
              const longitude = Number(obj.longitude);

              const city = obj.country.split('#')[0];
              const country = obj.country.split('#')[1];

              const formated =
                city.length > 0 ? `${city}, ${country}` : `${country}`;

              obj.name = formated;

              return (
                <Marker
                  key={obj.country}
                  onPress={() => handleSelect(obj)}
                  coordinate={{ latitude, longitude }}
                  pinColor={colors.secondary}
                  title={formated}
                />
              );
            })}
          </MapView>
          {displayInfos && (
            <DetailContainer>
              <Details>
                <DetailTitle>{selectedData.name}</DetailTitle>
                <DetailText>
                  Confirmados:{' '}
                  <DetailTextValue color="#ff001e">
                    {numberWithCommas(selectedData.confirmed_amount)}
                  </DetailTextValue>
                </DetailText>
                <DetailText>
                  Recuperados:{' '}
                  <DetailTextValue color={colors.secondary}>
                    {numberWithCommas(selectedData.recovered_amount)}
                  </DetailTextValue>
                </DetailText>
                <DetailText>
                  Mortes:{' '}
                  <DetailTextValue color="#fff">
                    {numberWithCommas(selectedData.death_amount)}
                  </DetailTextValue>
                </DetailText>
              </Details>
            </DetailContainer>
          )}
        </>
      )}
    </Container>
  );
}
const styles = StyleSheet.create({
  map: {
    position: 'absolute',
    zIndex: 1,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
Mapa.navigationOptions = ({ navigation }) => {
  return { header: () => <Header navigation={navigation} /> };
};
