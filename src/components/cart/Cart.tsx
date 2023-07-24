import { View, Text } from "react-native";
import React from "react";
import { Layout } from "@ui-kitten/components";
import { styled } from "styled-components/native";
import { CartItem } from "../../types/cart-item";
import { SwipeListView } from "react-native-swipe-list-view";
import { pesoFormat } from "../../hooks/usePesoFormat";
import Icon from "react-native-vector-icons/FontAwesome5";
import TotalCard from "./TotalCard";

type CartProps = {
  cartItems: CartItem[];
};

const Cart = ({ cartItems }: CartProps) => {
  return (
    <Container>
      <ItemsContainer>
        <SwipeListView
          data={cartItems}
          renderItem={data => (
            <ItemLayout>
              <Text>{data.index + 1}</Text>
              <Text>
                {data.item.name} <Text>x{data.item.count}</Text>{" "}
              </Text>
              <Text>
                {pesoFormat.format(data.item.price * data.item.count)}
              </Text>
            </ItemLayout>
          )}
          renderHiddenItem={() => (
            <TrashContainer activeOpacity={0.7}>
              <Icon name="trash" size={18} color={"#F31559"} />
            </TrashContainer>
          )}
          leftOpenValue={50}
          disableLeftSwipe
        />
      </ItemsContainer>
      <TotalCard />
    </Container>
  );
};

const Container = styled(Layout)`
  display: flex;
  flex: 1;
  background-color: transparent;
  padding: 30px;
`;

const ItemLayout = styled(Layout)`
  height: 50px;
  background-color: #f9f5e7;
  border-radius: 5px;
  margin-bottom: 10px;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 15px;
  elevation: 5;
  shadow-color: #030002;
  shadow-opacity: 0.25;
  shadow-radius: 5px;
`;

const TrashContainer = styled.TouchableOpacity`
  padding: 15px;
  height: 52px;
  border-radius: 5px;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: #f8ead8;
`;

const ItemsContainer = styled.View`
  margin-bottom: 30px;
`;

export default Cart;
