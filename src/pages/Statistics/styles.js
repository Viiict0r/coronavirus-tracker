import styled from 'styled-components/native';

import colors from '../../styles/colors';

export const CaseContainer = styled.View`
  border: 1px solid ${colors.secondary};
  padding: 15px;
  border-radius: 28px;
  width: ${props => props.width}%;
`;

export const InfoText = styled.Text`
  font-family: 'GothamLight';
  font-size: 18px;
  color: #fff;
  text-align: center;
`;

export const CasesText = styled.Text`
  font-family: 'GothamMedium';
  font-size: 18px;
  margin-top: 10px;
  color: ${colors.secondary};
  text-align: center;
`;

export const OtherContainer = styled.View`
  margin-top: 20px;
  margin-bottom: 20px;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;
