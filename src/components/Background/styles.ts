import styled from "styled-components/native";

export const Container = styled.ImageBackground.attrs({
  resizeMode: "contain",
  source: require("../../assets/images/github_bg/github_bg.png"),
  imageStyle: {
    top: "-47%",
  },
})`
  flex: 1;
`;

export const SafeAreaViewIOS = styled.SafeAreaView`
  flex: 1;
`;
