import { FlatList } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;

  padding: 0 20px;
  margin-top: 100px;
`;

export const RepoInfo = styled.View`
  flex-direction: row;
`;

export const OwnerAvatar = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 40px;
`;

export const TextGroup = styled.View`
  flex: 1;
  justify-content: space-evenly;

  margin-left: 16px;
`;

export const Description = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.gray_500};
`;

export const RepoStats = styled.View`
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;

  padding: 0 20px;
  margin-top: 24px;
`;

export const Stars = styled.View`
  align-items: center;
`;

export const StarsCounter = styled.Text`
  font-size: 20px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.gray_800};
`;

export const PlainText = styled.Text`
  font-size: 18px;
  text-align: center;
  color: ${({ theme }) => theme.colors.gray_500};
`;

export const Forks = styled.View`
  align-items: center;
`;

export const ForksCounter = styled.Text`
  font-size: 20px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.gray_800};
`;

export const OpenIssues = styled.View`
  align-items: center;
`;

export const OpenIssuesCounter = styled.Text`
  font-size: 20px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.gray_800};
`;

export const NoIssueContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const IssuesList = styled(FlatList).attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 50px;
` as unknown as typeof FlatList;
