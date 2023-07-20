import { View, Text, StatusBar } from "react-native";
import React from "react";
import SideMenuBar from "../../components/SideMenuBar";
import { styled } from "styled-components/native";

const MenuScreen = () => {
  return (
    <Container>
      <SideMenuBar />
    </Container>
  );
};

const Container = styled.View`
  background-color: #f9f5e7;
  display: flex;
  flex: 1;
  padding-top: ${StatusBar.currentHeight}px;
`;

export default MenuScreen;
