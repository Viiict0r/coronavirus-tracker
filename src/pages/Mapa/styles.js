import styled from 'styled-components/native';

import colors from '../../styles/colors';

export const Container = styled.View`
  background-color: ${colors.primary};
  left: 0;
  right: 0;
  bottom: 0;
  align-items: center;
  flex: 1;
`;

export const TitleContainer = styled.View`
  background-color: ${colors.primary};
  z-index: 2;
  width: 100%;
`;

export const DetailContainer = styled.View`
  width: 100%;
  z-index: 2;
  position: absolute;
  top: 72%;
  padding: 25px;
`;

export const Details = styled.View`
  width: 100%;
  background-color: rgba(35, 35, 35, 0.96);
  z-index: 2;
  padding: 10px;
  border-color: ${colors.primary};
  border-radius: 10px;
  align-items: center;
`;

export const DetailTitle = styled.Text`
  color: #fff;
  font-size: 16px;
  text-align: center;
  font-family: 'GothamMedium';
  margin-bottom: 8px;
`;

export const DetailText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-family: 'GothamLight';
  margin-bottom: 5px;
`;

export const DetailTextValue = styled.Text`
  color: ${props => props.color};
  font-size: 16px;
  font-family: 'GothamMedium';
  margin-bottom: 5px;
`;

export const Title = styled.Text`
  font-family: 'GothamLight';
  font-size: 18px;
  color: #fff;
  margin-top: 8px;
  margin-bottom: 22px;
  text-align: center;
`;
