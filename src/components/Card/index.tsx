import { Alert } from "react-native";
import React, { useRef } from "react";
import { Swipeable } from "react-native-gesture-handler";

import { CardAnimation } from "./CardAnimation";
import { useRepositories } from "../../hooks/useRepositories";

import {
  Info,
  Icon,
  Image,
  Title,
  TextGroup,
  DeleteIcon,
  Description,
  CardContainer,
  DeleteContainer,
  SwipeableContainer,
} from "./styles";

interface CardSchema {
  id: number;
  title: string;
  subTitle: string;
  imageUrl?: string;
}

interface CardProps {
  data: CardSchema;
  onPress: () => void;
}

export function Card({ data, onPress }: CardProps) {
  const swipeableRef = useRef<Swipeable>(null);
  const { removeRepository } = useRepositories();

  function handleDeleteAlert() {
    Alert.alert(
      "Remover item",
      "Você tem certeza que deseja remover esse repositório da lista?",
      [
        {
          text: "Não",
          onPress: () => swipeableRef.current?.close(),
          style: "cancel",
        },
        { text: "Sim", onPress: () => removeRepository(data.id) },
      ]
    );
  }

  function CardContent() {
    return (
      <CardContainer hasImage={!!data.imageUrl} onPress={onPress}>
        <Info>
          {data.imageUrl && <Image source={{ uri: data.imageUrl }} />}

          <TextGroup>
            <Title numberOfLines={1}>{data.title}</Title>
            <Description numberOfLines={1}>{data.subTitle}</Description>
          </TextGroup>
        </Info>

        <Icon name="chevron-right" size={20} />
      </CardContainer>
    );
  }

  function SwipeableDelete() {
    return (
      <DeleteContainer>
        <DeleteIcon name="trash" size={24} />
      </DeleteContainer>
    );
  }

  if (data.imageUrl) {
    return (
      <CardAnimation testID="repository-card">
        <SwipeableContainer
          ref={swipeableRef}
          rightThreshold={42}
          overshootRight={false}
          renderRightActions={() => <SwipeableDelete />}
          onSwipeableRightOpen={handleDeleteAlert}
        >
          <CardContent />
        </SwipeableContainer>
      </CardAnimation>
    );
  }

  return (
    <CardAnimation>
      <CardContent />
    </CardAnimation>
  );
}
