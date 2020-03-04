import styled from 'styled-components/native';

import colors from '../../styles/colors';

export const CreditsContainer = styled.View`
  align-items: center;
`;

export const Title = styled.Text`
  color: ${colors.secondary};
  font-family: 'GothamMedium';
  font-size: 20px;
  margin-bottom: 10px;
  margin-top: 20px;
`;

export const Text = styled.Text`
  color: #fff;
  font-family: 'GothamLight';
  font-size: 16px;
  margin-top: 10px;
`;

export const Url = styled.Text`
  color: #fff;
  font-family: 'GothamLight';
  font-size: 16px;
  margin-bottom: 5px;
  text-align: center;
  text-decoration: underline;
`;
