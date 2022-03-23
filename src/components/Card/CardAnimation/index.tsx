import React, { useEffect } from "react";
import { useWindowDimensions, ViewProps } from "react-native";
import {
  withTiming,
  interpolate,
  Extrapolate,
  useSharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";

import { AnimationContainer } from "./styles";

interface CardAnimationProps extends ViewProps {
  children: React.ReactNode;
}

export function CardAnimation({ children, ...rest }: CardAnimationProps) {
  const { width: displayWidth } = useWindowDimensions();
  const cardOpacity = useSharedValue(0);
  const cardOffset = useSharedValue(0.25 * displayWidth);

  const animatedStyle = useAnimatedStyle(() => {
    // TODO - setup animated style
    return {
      opacity: interpolate(cardOpacity.value, [0, 50], [1, 0]),
      transform: [
        {
          translateX: interpolate(
            cardOffset.value,
            [0, 50],
            [0, -50],
            Extrapolate.CLAMP
          ),
        },
      ],
    };
  });

  useEffect(() => {
    /**
     * TODO - setup cardOpacity.value and cardOffset.value with
     * withTiming()
     */

    cardOffset.value = withTiming(
      0,
      { duration: 1000 },
      () => (cardOpacity.value = 1)
    );
    cardOpacity.value = withTiming(1, { duration: 1000 });
  }, []);

  return (
    <AnimationContainer {...rest} style={animatedStyle}>
      {children}
    </AnimationContainer>
  );
}
