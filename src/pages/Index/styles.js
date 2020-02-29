import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import colors from '../../styles/colors';

export const TextContainer = styled.View`
  align-items: center;
  margin-top: 60px;
`;

export const Logo = styled.View`
  flex: 1;
  align-items: center;
  margin-top: 80px;
`;

export const TextBold = styled.Text`
  font-size: 44px;
  color: white;
  font-family: 'GothamMedium';
  color: ${colors.secondary};
`;

export const TextLight = styled.Text`
  font-size: 44px;
  color: white;
  font-family: 'GothamLight';
  color: ${colors.secondary};
`;

export const ContainerButtons = styled.View`
  margin: 10px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 40px;
  padding-right: 40px;
`;

export const Button = styled(RectButton)``;

export const ButtonLayout = styled.View`
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: ${colors.secondary};
  font-size: 16px;
  margin-top: 5px;
  font-family: 'GothamLight';
`;

export const Version = styled.Text`
  color: #fff;
  font-family: 'GothamLight';
  font-size: 16px;
`;

export const Bottom = styled.View`
  align-items: center;
  justify-content: center;
  padding: 35px;
  flex-direction: row;
`;

export const ButtonExclamation = styled.View`
  border: 1px solid #fff;
  align-items: center;
  justify-content: center;
  align-self: flex-end;
`;

export const BottomLayout = styled.View`
  width: 33%;
`;
