import { View, Text } from "react-native";
import React from "react";
import { Layout } from "@ui-kitten/components";
import { styled } from "styled-components/native";
import Categories from "./Categories";
import ItemsList from "./ItemsList";

const Contents = () => {
  return (
    <Container>
      <Categories />
      <DivLine />
      <ItemsList />
    </Container>
  );
};

const Container = styled(Layout)`
  display: flex;
  flex: 2;
  flex-direction: column;
  background-color: transparent;
`;

const DivLine = styled(Layout)`
  width: 100%;
  height: 2px;
  border: 1px solid #eddbc7;
`;

export default Contents;
