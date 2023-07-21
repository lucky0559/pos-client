import { View, Text } from "react-native";
import React from "react";
import { Layout } from "@ui-kitten/components";
import { styled } from "styled-components/native";

const Cart = () => {
  return (
    <Container>
      <Text>Cart</Text>
    </Container>
  );
};

const Container = styled(Layout)`
  display: flex;
  flex: 1;
  background-color: transparent;
`;

export default Cart;
