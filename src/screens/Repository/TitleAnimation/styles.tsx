import styled from "styled-components/native";
import Animated from "react-native-reanimated";

export const Container = styled.View``;

export const TitleContainer = styled.ScrollView``;

export const Title = styled(Animated.Text)`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.gray_800};
  font-family: ${({ theme }) => theme.fonts.bold};
`;
