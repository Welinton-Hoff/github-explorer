import { Feather } from "@expo/vector-icons";
import styled from "styled-components/native";
import { TextInput, FlatList } from "react-native";

export const Container = styled.View`
  flex: 1;
  padding: 0 20px;
  margin-top: 100px;
`;

export const AddGithubRepo = styled.View``;

export const Title = styled.Text`
  font-size: 28px;
  color: ${({ theme }) => theme.colors.gray_800};
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const Input = styled.View`
  flex-direction: row;
  margin-top: 20px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const InputField = styled(TextInput).attrs(({ theme }) => ({
  placeholderTextColor: theme.colors.gray_400,
}))`
  flex: 1;

  padding: 0 12px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.gray_800};
`;

export const InputButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  padding: 16px;

  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  background-color: ${({ theme }) => theme.colors.green_200};

  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
`;

export const Icon = styled(Feather)`
  color: ${({ theme }) => theme.colors.white};
`;

export const RepositoriesList = styled(FlatList)`
  margin-top: 64px;
` as unknown as typeof FlatList;
