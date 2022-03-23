import React, { useEffect, useState } from "react";
import { useWindowDimensions } from "react-native";
import {
  withRepeat,
  withTiming,
  useSharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";

import { Container, TitleContainer, Title } from "./styles";

interface TitleAnimationProps {
  children: string;
}

export function TitleAnimation({ children }: TitleAnimationProps) {
  const { width } = useWindowDimensions();
  const contentOffset = useSharedValue(0);
  const [textWidth, setTextWidth] = useState(0);

  function triggerTitleAnimation() {
    const textOverflowPx = textWidth - width + 136;

    if (textOverflowPx <= 0) {
      return;
    }

    contentOffset.value = -5;

    contentOffset.value = withRepeat(
      withTiming(textOverflowPx + 5, {
        duration: 2000 + 15 * textOverflowPx,
      }),
      -1,
      true
    );
  }

  const titleAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: -contentOffset.value }],
    };
  });

  const onSizeChange = (contentWidth: number) => {
    if (textWidth !== 0) return;

    setTextWidth(contentWidth);
  };

  useEffect(() => {
    triggerTitleAnimation();
  }, [textWidth]);

  return (
    <Container>
      <TitleContainer
        horizontal
        onContentSizeChange={onSizeChange}
        showsHorizontalScrollIndicator={false}
      >
        <Title style={titleAnimatedStyle}>{children}</Title>
      </TitleContainer>
    </Container>
  );
}
