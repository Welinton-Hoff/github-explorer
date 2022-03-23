import React from "react";

import {
  Logo,
  ArrowLeft,
  Container,
  BackButton,
  BlankSpace,
  SafeAreaViewIOS,
} from "./styles";

interface HeaderProps {
  goBack?: () => void;
}

export function Header({ goBack }: HeaderProps) {
  if (goBack) {
    return (
      <SafeAreaViewIOS>
        <Container>
          <BackButton onPress={goBack}>
            <ArrowLeft />
          </BackButton>

          <Logo />

          <BlankSpace />
        </Container>
      </SafeAreaViewIOS>
    );
  }

  return (
    <SafeAreaViewIOS>
      <Container style={{ justifyContent: "center" }}>
        <Logo />
      </Container>
    </SafeAreaViewIOS>
  );
}
