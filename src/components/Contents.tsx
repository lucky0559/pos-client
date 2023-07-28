import React from "react";
import { Layout } from "@ui-kitten/components";
import { styled } from "styled-components/native";
import Categories from "./categories/Categories";
import ItemsList from "./items/ItemsList";
import DividerLine from "./DividerLine";

type ContentsProps = {};

const Contents = () => {
  return (
    <Container>
      <Categories />
      <DividerLine />
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

export default Contents;
