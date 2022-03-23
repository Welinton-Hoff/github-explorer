import "react-native-gesture-handler";

import React from "react";
import { StatusBar } from "react-native";
import AppLoading from "expo-app-loading";
import { ThemeProvider } from "styled-components/native";

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

import { Routes } from "./src/routes";
import theme from "./src/global/styles/theme";
import { RepositoriesProvider } from "./src/contexts/RepositoriesProvider";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={theme.colors.gray_50}
      />

      <RepositoriesProvider>
        <ThemeProvider theme={theme}>
          <Routes />
        </ThemeProvider>
      </RepositoriesProvider>
    </>
  );
}
