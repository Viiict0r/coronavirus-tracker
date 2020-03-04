import React, { useState, useEffect } from 'react';

import { Table, Row, Rows } from 'react-native-table-component';
import {
  ScrollView,
  StyleSheet,
  ActivityIndicator,
  RefreshControl,
  Alert,
} from 'react-native';
import { Container } from '../../components/Container';
import Header from '../../components/Header';
import colors from '../../styles/colors';

import api from '../../services/api';

import { CaseContainer, InfoText, CasesText, OtherContainer } from './styles';

export default function Statistics() {
  const [loading, setLoading] = useState(true);
  const [confirmados, setConfirmados] = useState(0);
  const [mortes, setMortes] = useState(0);
  const [cura, setCura] = useState(0);
  const [refreshing, setRefreshing] = useState(false);
  const [tableHead, _] = useState(['País', 'Casos', 'Mortes', 'Curados']);
  const [tableData, setTableData] = useState([]);

  /** Fetch data from api */
  async function fetchData() {
    // Do stuff...
    setLoading(true);

    try {
      const { data } = await api.get('/statistics');
      let totalConfirmed = 0;
      let totalDeaths = 0;
      let totalRecovered = 0;
      const dt = [];

      data.sort((a, b) => b.confirmed_amount - a.confirmed_amount);

      data.forEach(obj => {
        dt.push([
          String(obj.country).replace('Mainland ', ''),
          numberWithCommas(String(obj.confirmed_amount)),
          numberWithCommas(String(obj.death_amount)),
          numberWithCommas(String(obj.recovered_amount)),
        ]);

        totalConfirmed += obj.confirmed_amount;
        totalDeaths += obj.death_amount;
        totalRecovered += obj.recovered_amount;
      });

      setConfirmados(totalConfirmed);
      setMortes(totalDeaths);
      setCura(totalRecovered);
      setTableData(dt);
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível obter as informações do servidor.');
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }

  function handleRefresh() {
    setRefreshing(true);
    fetchData();
  }

  function numberWithCommas(x) {
    if (x === 'null') {
      return '0';
    }
    const parts = x.toString().split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    return parts.join(',');
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }>
        <CaseContainer width={100}>
          <InfoText>Casos confirmados:</InfoText>
          {loading ? (
            <ActivityIndicator
              size="small"
              style={{ marginTop: 8 }}
              color={colors.secondary}
            />
          ) : (
            <CasesText>{numberWithCommas(confirmados)}</CasesText>
          )}
        </CaseContainer>
        <OtherContainer>
          <CaseContainer width={45}>
            <InfoText>Mortes:</InfoText>
            {loading ? (
              <ActivityIndicator
                size="small"
                style={{ marginTop: 8 }}
                color={colors.secondary}
              />
            ) : (
              <CasesText>{numberWithCommas(mortes)}</CasesText>
            )}
          </CaseContainer>
          <CaseContainer width={45}>
            <InfoText>Curados:</InfoText>
            {loading ? (
              <ActivityIndicator
                size="small"
                style={{ marginTop: 8 }}
                color={colors.secondary}
              />
            ) : (
              <CasesText>{numberWithCommas(cura)}</CasesText>
            )}
          </CaseContainer>
        </OtherContainer>
        <CaseContainer width={100}>
          <InfoText>Estatísticas:</InfoText>
          {loading ? (
            <ActivityIndicator
              size="large"
              style={{ marginTop: 8 }}
              color={colors.secondary}
            />
          ) : (
            <Table style={{ marginTop: 15 }}>
              <Row data={tableHead} textStyle={styles.header} />
              <Rows data={tableData} textStyle={styles.text} />
            </Table>
          )}
        </CaseContainer>
      </ScrollView>
    </Container>
  );
}
const styles = StyleSheet.create({
  header: {
    fontFamily: 'GothamMedium',
    fontSize: 16,
    color: '#fff',
    margin: 5,
  },
  text: {
    fontFamily: 'GothamLight',
    fontSize: 15,
    color: '#fff',
    margin: 6,
  },
});
Statistics.navigationOptions = ({ navigation }) => {
  return { header: () => <Header navigation={navigation} /> };
};
