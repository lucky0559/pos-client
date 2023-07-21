import { View, Text, StatusBar } from "react-native";
import React from "react";
import SideMenuBar from "../../components/SideMenuBar";
import { styled } from "styled-components/native";
import { Layout } from "@ui-kitten/components";
import Contents from "../../components/Contents";
import Cart from "../../components/Cart";

const MenuScreen = () => {
  return (
    <Container>
      <SideMenuBar />
      <Contents />
      <Cart />
    </Container>
  );
};

const Container = styled(Layout)`
  background-color: #f9f5e7;
  display: flex;
  flex: 1;
  padding-top: ${StatusBar.currentHeight}px;
  flex-direction: row;
`;

export default MenuScreen;
