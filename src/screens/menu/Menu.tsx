import { StatusBar } from "react-native";
import React from "react";
import SideMenuBar from "../../components/SideMenuBar";
import { styled } from "styled-components/native";
import { Layout } from "@ui-kitten/components";
import Contents from "../../components/Contents";
import Cart from "../../components/cart/Cart";
import { cart } from "../../mockData/cart";

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
  background-color: #eddbc7;
  display: flex;
  flex: 1;
  padding-top: ${StatusBar.currentHeight}px;
  flex-direction: row;
`;

export default MenuScreen;
