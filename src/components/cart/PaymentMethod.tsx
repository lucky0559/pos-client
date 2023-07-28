import { ImageSourcePropType } from "react-native";
import React from "react";
import { styled } from "styled-components/native";
import { Layout } from "@ui-kitten/components";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

type PaymentMethodProps = {
  label: string;
  path?: ImageSourcePropType;
  isActive?: boolean;
  onSelectPaymentMethod: (val: number) => void;
};

const PaymentMethod = ({
  label,
  path,
  isActive,
  onSelectPaymentMethod
}: PaymentMethodProps) => {
  return (
    <Container>
      <SubContainer
        activeOpacity={0.8}
        onPress={() =>
          onSelectPaymentMethod(
            label === "Cash" ? 1 : label === "Gcash" ? 2 : 3
          )
        }
        isActive={isActive}
      >
        {path ? (
          <ImageIcon source={path} resizeMode="center" isActive={isActive} />
        ) : (
          <Icon name="cash" size={25} color={isActive ? "white" : "black"} />
        )}
      </SubContainer>
      <Label>{label}</Label>
    </Container>
  );
};

const SubContainer = styled.TouchableOpacity<{ isActive?: boolean }>`
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #a7727d;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 70px;
  background-color: ${p => (p.isActive ? "#A7727D" : "transparent")};
  height: 45px;
  transition: opacity 0.5s ease-in-out;
`;

const Container = styled(Layout)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
`;

const ImageIcon = styled.Image<{ isActive?: boolean }>`
  width: 35px;
  height: 20px;
  tint-color: ${p => (p.isActive ? "white" : "black")};
`;

const Label = styled.Text``;

export default PaymentMethod;
