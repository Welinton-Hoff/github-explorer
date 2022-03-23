import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { Platform } from "react-native";

export const SafeAreaViewIOS = styled.SafeAreaView``;

export const Container = styled.View`
  padding: ${() => (Platform.OS === "android" ? "30px 20px" : "15px 20px")};

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.Image.attrs({
  source: require("../../assets/images/logo/logo.png"),
})``;

export const BackButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.5,
})``;

export const ArrowLeft = styled(Feather).attrs({
  size: 20,
  name: "arrow-left",
})``;

export const BlankSpace = styled.View`
  width: 20px;
`;
