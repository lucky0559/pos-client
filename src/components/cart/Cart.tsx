import { View, Text } from "react-native";
import React from "react";
import { Layout } from "@ui-kitten/components";
import { styled } from "styled-components/native";
import { CartItem } from "../../types/cart-item";
import { SwipeListView } from "react-native-swipe-list-view";

type CartProps = {
  cartItems: CartItem[];
};

const Cart = ({ cartItems }: CartProps) => {
  return (
    <Container>
      <SwipeListView
        data={cartItems}
        renderItem={data => (
          <ItemLayout>
            <Text>{data.index + 1}</Text>
            <Text>
              {data.item.name} <Text>x{data.item.count}</Text>{" "}
            </Text>
            <Text>&#8369;{data.item.price * data.item.count}</Text>
          </ItemLayout>
        )}
        // renderHiddenItem={() => (
        //   <>
        //     <Text>Hello</Text>
        //   </>
        // )}
        leftOpenValue={40}
      />
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
  background-color: #eddbc7;
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

export default Cart;
