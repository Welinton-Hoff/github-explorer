import React from "react";

import {
  Logo,
  Icon,
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
            <Icon name="arrow-left" size={20} />
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
