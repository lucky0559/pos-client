import React from "react";
import { styled } from "styled-components/native";
import { Layout, Text } from "@ui-kitten/components";

const ItemCard = () => {
  return (
    <Container activeOpacity={0.8}>
      <ItemDetails>
        <ItemName>Lobster</ItemName>
        <ItemPrice>&#8369;130</ItemPrice>
      </ItemDetails>
      <ItemQuantityContainer>
        <AmountCounterButton></AmountCounterButton>
        <ItemQuantity>0</ItemQuantity>
        <AmountCounterButton></AmountCounterButton>
      </ItemQuantityContainer>
    </Container>
  );
};

const Container = styled.TouchableOpacity`
  width: 180px;
  height: 140px;
  background-color: #eddbc7;
  padding: 15px;
  border-radius: 15px;
  margin-vertical: 10px;
`;

const ItemDetails = styled(Layout)`
  background-color: transparent;
  display: flex;
  flex: 1;
`;

const ItemQuantityContainer = styled(Layout)`
  background-color: transparent;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

const ItemName = styled(Text)`
  font-size: 18px;
`;

const ItemPrice = styled(Text)`
  font-size: 14px;
`;

const ItemQuantity = styled(Text)`
  font-size: 18px;
`;

const AmountCounterButton = styled(Layout)`
  width: 30px;
  height: 30px;
  background-color: #a7727d;
  border: 1px solid black;
  margin: 10px;
  border-radius: 5px;
`;

export default ItemCard;
