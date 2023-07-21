import { View, Text } from "react-native";
import React from "react";
import { Layout } from "@ui-kitten/components";
import { styled } from "styled-components/native";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <Container>
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
    </Container>
  );
};
const Container = styled(Layout)`
  display: flex;
  flex: 1;
  background-color: transparent;
  padding: 30px;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export default Categories;
