import React, { useContext } from "react";
import { Layout } from "@ui-kitten/components";
import { styled } from "styled-components/native";
import ItemCard from "./ItemCard";
import { MenuContext } from "../../context/menu.context";

const ItemsList = () => {
  const context = useContext(MenuContext);
  return (
    <Container itemsLength={context?.items?.length! > 3}>
      {context?.items?.map(item => {
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
