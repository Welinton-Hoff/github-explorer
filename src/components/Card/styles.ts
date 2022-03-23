import { Feather } from "@expo/vector-icons";
import styled, { css } from "styled-components/native";
import { Swipeable } from "react-native-gesture-handler";

interface CardContainerProps {
  hasImage: boolean;
}

export const SwipeableContainer = styled(Swipeable).attrs({
  containerStyle: {
    marginBottom: 12,
  },
})``;

export const CardContainer = styled.Pressable<CardContainerProps>`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 12px 18px;
  border-radius: 5px;
  background-color: #fff;

  ${({ hasImage }) =>
    !hasImage &&
    css`
      margin-bottom: 12px;
    `}
`;

export const Info = styled.View`
  flex: 1;
  flex-direction: row;
`;

export const Image = styled.Image`
  width: 64px;
  height: 64px;

  margin-right: 12px;
  border-radius: 32px;
`;

export const TextGroup = styled.View`
  flex: 1;
  height: 64px;
  justify-content: space-around;
`;

export const Title = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.gray_700};
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const Description = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray_400};
`;

export const Icon = styled(Feather)`
  margin-left: 12px;
  color: ${({ theme }) => theme.colors.gray_200};
`;

export const DeleteContainer = styled.View`
  align-items: flex-end;
  justify-content: center;

  padding: 0 30px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;

  background-color: red;
`;

export const DeleteIcon = styled(Feather)`
  color: #fff;
`;
