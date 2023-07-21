import { View, Text } from "react-native";
import React from "react";
import { Layout } from "@ui-kitten/components";
import { styled } from "styled-components/native";
import ItemCard from "./ItemCard";

const ItemsList = () => {
  return (
    <Container>
      <ItemCard />
    </Container>
  );
};

const Container = styled(Layout)`
  display: flex;
  flex: 1;
  background-color: transparent;
  padding: 30px;
`;

export default ItemsList;
