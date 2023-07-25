import React from "react";
import { styled } from "styled-components/native";
import { Layout, Text } from "@ui-kitten/components";
import DashedDivider from "../DashedDivider";
import { pesoFormat } from "../../hooks/usePesoFormat";
import PaymentMethod from "./PaymentMethod";

const TotalCard = () => {
  return (
    <Container>
      <ViewSubtotal>
        <TextStyled>Subtotal</TextStyled>
        <TextStyled>{pesoFormat.format(1225 + 2160)}</TextStyled>
      </ViewSubtotal>
      <ViewTax>
        <TextStyled>Tax 10%</TextStyled>
        <TextStyled>{pesoFormat.format(3385 * 0.1)}</TextStyled>
      </ViewTax>
      <DashedDivider />
      <ViewTotal>
        <TextStyled category="h6">Total</TextStyled>
        <TextStyled category="h6">
          {pesoFormat.format(3385 + 338.5 * 0.1)}
        </TextStyled>
      </ViewTotal>
      <PaymentMethodView>
        <TextStyled>Payment Method</TextStyled>
        <MethodPickerView>
          <PaymentMethod label="Cash" />
          <PaymentMethod label="Gcash" />
          <PaymentMethod label="Paymaya" />
        </MethodPickerView>
      </PaymentMethodView>
      <PlaceOrderButton activeOpacity={0.8}>
        <TextStyled style={{ color: "white" }}>Place Order</TextStyled>
      </PlaceOrderButton>
    </Container>
  );
};

const Container = styled(Layout)`
  display: flex;
  background-color: #f9f5e7;
  padding: 30px;
  border-radius: 5px;
  elevation: 5;
  shadow-color: #030002;
  shadow-opacity: 0.25;
  shadow-radius: 5px;
`;

const ViewSubtotal = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ViewTax = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const TextStyled = styled(Text)`
  padding-vertical: 5px;
`;

const ViewTotal = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
  margin-top: 20px;
`;

const PaymentMethodView = styled.View`
  margin-top: 50px;
`;

const MethodPickerView = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 8px;
`;

const PlaceOrderButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background-color: #807574;
  margin-top: 30px;
  border-radius: 5px;
  padding: 8px;
`;

export default TotalCard;
