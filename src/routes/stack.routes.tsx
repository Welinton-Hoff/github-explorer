import React from "react";
import { ParamListBase, Route } from "@react-navigation/native";
import { Scene } from "@react-navigation/stack/lib/typescript/src/types";
import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";

import theme from "../global/styles/theme";

import { Header } from "../components/Header";
import { Dashboard } from "../screens/Dashboard";
import { Repository } from "../screens/Repository";

interface ScreenOptionsProps {
  previous: Scene<Route<string, object | undefined>> | undefined;
  navigation: StackNavigationProp<ParamListBase, string>;
}

const stackRoutes = createStackNavigator();
const screenOptions = {
  header: () => IsHeader,
  headerTransparent: true,
  cardStyle: {
    backgroundColor: theme.colors.gray_50,
  },
};

const IsHeader = ({ previous, navigation }: ScreenOptionsProps) => {
  if (previous) {
    return <Header goBack={navigation.goBack} />;
  }

  return <Header />;
};

const AppRoutes: React.FC = () => (
  <stackRoutes.Navigator screenOptions={screenOptions}>
    <stackRoutes.Screen name="Dashboard" component={Dashboard} />
    <stackRoutes.Screen name="Repository" component={Repository} />
  </stackRoutes.Navigator>
);

export default AppRoutes;
