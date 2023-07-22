import { View, Text } from "react-native";
import React from "react";
import { Layout } from "@ui-kitten/components";
import { styled } from "styled-components/native";
import ItemCard from "./ItemCard";
import { categories } from "../../mockData/categories";

const ItemsList = () => {
  return (
    <Container itemsLength={categories[0].items.length > 3}>
      {categories[0].items.map(item => {
        return <ItemCard key={item.id} item={item} />;
      })}
    </Container>
  );
};

const Container = styled(Layout)<{ itemsLength: boolean }>`
  display: flex;
  flex: 1;
  background-color: transparent;
  padding: 30px;
  flex-direction: row;
  justify-content: ${p => (p.itemsLength ? "space-between" : "space-evenly")};
  flex-wrap: wrap;
`;

export default ItemsList;
