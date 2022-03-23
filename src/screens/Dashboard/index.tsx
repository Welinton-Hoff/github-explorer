import { ListRenderItem, TextInput } from "react-native";
import React, { useRef, useState } from "react";
import { useNavigation } from "@react-navigation/core";

import { Card } from "../../components/Card";
import { Background } from "../../components/Background";

import { useRepositories } from "../../hooks/useRepositories";

import {
  Icon,
  Input,
  Title,
  Container,
  InputField,
  InputButton,
  AddGithubRepo,
  RepositoriesList,
} from "./styles";
import { RepositoryProps } from "../../contexts/RepositoriesProvider";

export function Dashboard() {
  const [inputText, setInputText] = useState("");
  const inputRef = useRef<TextInput>(null);

  const { navigate } = useNavigation();

  const { addRepository, repositories } = useRepositories();

  function handleAddRepository() {
    /**
     * TODO:
     * - call addRepository function sending inputText value;
     * - clean inputText value.
     */
    inputRef.current?.blur();
  }

  function handleRepositoryPageNavigation(id: number) {
    /**
     * TODO - navigate to the Repository screen sending repository id.
     * Remember to use the correct prop name (repositoryId) to the repositoy id:
     *
     * navigate(SCREEN NAME, {
     *  repositoryId: id of the repository
     * })
     */
  }

  const renderItem: ListRenderItem<RepositoryProps> = ({ item }) => {
    const data = {
      id: item.id,
      title: item.full_name,
      subTitle: item.description,
      imageUrl: item.owner.avatar_url,
    };

    return (
      <Card
        data={data}
        key={item.id}
        onPress={() => handleRepositoryPageNavigation(item.id)}
      />
    );
  };

  return (
    <Background>
      <Container>
        <AddGithubRepo>
          <Title>Explore repositórios{"\n"}no GitHub.</Title>

          <Input>
            <InputField
              ref={inputRef}
              value={inputText}
              autoCorrect={false}
              returnKeyType="send"
              autoCapitalize="none"
              onSubmitEditing={handleAddRepository}
              placeholder="Digite aqui 'usuário/repositório'"
              /**
               * TODO - update inputText value when input text value
               * changes:
               * onChangeText={YOUR CODE HERE}
               */
            />

            <InputButton
              testID="input-button"
              onPress={handleAddRepository}
              /**
               * TODO - ensure to disable button when inputText is
               * empty (use disabled prop to this):
               * disabled={CONDITION HERE}
               */
            >
              <Icon name="search" size={20} />
            </InputButton>
          </Input>
        </AddGithubRepo>

        <RepositoriesList
          data={repositories}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          keyExtractor={(repository) => String(repository.id)}
        />
      </Container>
    </Background>
  );
}
