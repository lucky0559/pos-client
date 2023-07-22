import React from "react";
import { styled } from "styled-components/native";
import { Layout, Text } from "@ui-kitten/components";
import DropShadow from "../DropShadow";
import Icon from "react-native-vector-icons/AntDesign";
import { Item } from "../../types/item";

type ItemCardProps = {
  item: Item;
};

const ItemCard = ({ item }: ItemCardProps) => {
  return (
    <DropShadow width={180} borderRadius={15} height={140}>
      <Container>
        <LeftFlag />
        <Contents>
          <ItemDetails>
            <ItemName>{item.name}</ItemName>
            <ItemPrice>&#8369;{item.price}</ItemPrice>
          </ItemDetails>
          <ItemQuantityContainer>
            <AmountCounterButton activeOpacity={0.7}>
              <Icon name="minus" size={15} />
            </AmountCounterButton>
            <ItemQuantity>0</ItemQuantity>
            <AmountCounterButton activeOpacity={0.7}>
              <Icon name="plus" size={15} />
            </AmountCounterButton>
          </ItemQuantityContainer>
        </Contents>
      </Container>
    </DropShadow>
  );
};

const Container = styled(Layout)`
  width: 180px;
  height: 140px;
  background-color: #eddbc7;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
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
  width: 100%;
  padding-right: 5px;
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

const AmountCounterButton = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  border: 1px solid black;
  margin: 5px 10px 5px 10px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Contents = styled(Layout)`
  padding: 15px;
  background-color: transparent;
`;

const LeftFlag = styled(Layout)`
  background-color: #a7727d;
  width: 10px;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
`;

export default ItemCard;
