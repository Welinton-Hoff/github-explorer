import React, { useEffect, useRef, useState } from "react";
import { useNavigation } from "@react-navigation/core";
import { ListRenderItem, TextInput } from "react-native";

import { Card } from "../../components/Card";
import { Background } from "../../components/Background";

import { useRepositories } from "../../hooks/useRepositories";
import { RepositoryProps } from "../../contexts/RepositoriesProvider";

import {
  Input,
  Title,
  Container,
  SearchIcon,
  InputField,
  InputButton,
  AddGithubRepo,
  RepositoriesList,
} from "./styles";

export function Dashboard() {
  const { navigate } = useNavigation();
  const inputRef = useRef<TextInput>(null);
  const [inputText, setInputText] = useState("");
  const { addRepository, repositories } = useRepositories();
  const InputButtonEnabled = !inputText;

  function handleAddRepository() {
    addRepository(inputText);
    inputRef.current?.blur();
    setInputText("");
  }

  function handleRepositoryPageNavigation(id: number) {
    navigate("Repository", { repositoryId: id });
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
              onChangeText={setInputText}
              onSubmitEditing={handleAddRepository}
              placeholder="Digite aqui 'usuário/repositório'"
            />

            <InputButton
              testID="input-button"
              disabled={!inputText}
              onPress={handleAddRepository}
            >
              <SearchIcon />
            </InputButton>
          </Input>
        </AddGithubRepo>

        <RepositoriesList
          data={repositories}
          renderItem={renderItem}
          keyExtractor={(repository) => String(repository.id)}
        />
      </Container>
    </Background>
  );
}
