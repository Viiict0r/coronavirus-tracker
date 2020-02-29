import styled from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler';
import colors from '../../styles/colors';

export const Container = styled.View`
  padding: 12px 12px 25px 25px;
  flex-direction: row;
  background-color: ${colors.primary};
`;

export const Layout = styled.View`
  width: 33%;
  justify-content: center;
`;

export const BackButton = styled(RectButton)`
  border-radius: ${100 / 2};
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
`;
