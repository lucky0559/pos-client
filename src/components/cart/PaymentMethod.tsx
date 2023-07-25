import { View, Text } from "react-native";
import React from "react";
import { styled } from "styled-components/native";
import { Layout } from "@ui-kitten/components";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

type PaymentMethodProps = {
  label: string;
  icon?: string;
};

const PaymentMethod = ({ label }: PaymentMethodProps) => {
  return (
    <Container>
      <SubContainer activeOpacity={0.6}>
        <Icon name="cash" size={25} />
      </SubContainer>
      <Text>{label}</Text>
    </Container>
  );
};

const SubContainer = styled.TouchableOpacity`
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #a7727d;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 70px;
`;

const Container = styled(Layout)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
`;

export default PaymentMethod;
