import React, { ReactNode } from "react";
import { Container, SafeAreaViewIOS } from "./styles";

interface BackgroundProps {
  children: ReactNode;
}

export function Background({ children }: BackgroundProps) {
  return (
    <Container>
      <SafeAreaViewIOS>{children}</SafeAreaViewIOS>
    </Container>
  );
}
