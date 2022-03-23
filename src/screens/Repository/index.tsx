import React from "react";
import { useRoute } from "@react-navigation/core";
import { Linking, ListRenderItem } from "react-native";
import { useRepositories } from "../../hooks/useRepositories";

import { Card } from "../../components/Card";
import { TitleAnimation } from "./TitleAnimation";
import { Background } from "../../components/Background";

import {
  Stars,
  Forks,
  RepoInfo,
  Container,
  TextGroup,
  RepoStats,
  PlainText,
  OpenIssues,
  IssuesList,
  OwnerAvatar,
  Description,
  StarsCounter,
  ForksCounter,
  NoIssueContainer,
  OpenIssuesCounter,
} from "./styles";
import { IssueProps } from "../../contexts/RepositoriesProvider";

interface RepositoryParams {
  repositoryId: number;
}

export function Repository() {
  const { params } = useRoute();
  const { findRepositoryById } = useRepositories();
  const { repositoryId } = params as RepositoryParams;
  const repository = findRepositoryById(repositoryId);

  function handleIssueNavigation(issueUrl: string) {
    // TODO - use Linking to open issueUrl in a browser
    Linking.openURL(issueUrl);
  }

  const renderItem: ListRenderItem<IssueProps> = ({ item }) => {
    const data = {
      id: item.id,
      title: item.title,
      subTitle: item.user.login,
    };

    return (
      <Card
        data={data}
        key={item.id}
        onPress={() => handleIssueNavigation(item.html_url)}
      />
    );
  };

  const HasIssues = () => {
    if (repository.issues.length > 0) {
      return (
        <IssuesList
          renderItem={renderItem}
          data={repository.issues}
          keyExtractor={(issue) => String(issue.id)}
        />
      );
    }

    return (
      <NoIssueContainer>
        <PlainText>Este repositório não possue nenhuma issue.</PlainText>
      </NoIssueContainer>
    );
  };

  return (
    <Background>
      <Container>
        <RepoInfo>
          <OwnerAvatar source={{ uri: repository.owner.avatar_url }} />

          <TextGroup>
            <TitleAnimation>{repository.full_name}</TitleAnimation>

            <Description numberOfLines={2}>
              {repository.description}
            </Description>
          </TextGroup>
        </RepoInfo>

        <RepoStats>
          <Stars>
            <StarsCounter>{repository.stargazers_count}</StarsCounter>
            <PlainText>Stars</PlainText>
          </Stars>

          <Forks>
            <ForksCounter>{repository.forks_count}</ForksCounter>
            <PlainText>Forks</PlainText>
          </Forks>

          <OpenIssues>
            <OpenIssuesCounter>{repository.issues.length}</OpenIssuesCounter>
            <PlainText>Issues{"\n"}Abertas</PlainText>
          </OpenIssues>
        </RepoStats>

        <HasIssues />
      </Container>
    </Background>
  );
}
