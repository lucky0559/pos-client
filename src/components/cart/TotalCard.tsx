import React, { useContext, useMemo } from "react";
import { styled } from "styled-components/native";
import { Layout, Spinner, Text } from "@ui-kitten/components";
import DashedDivider from "../DashedDivider";
import { pesoFormat } from "../../hooks/usePesoFormat";
import PaymentMethod from "./PaymentMethod";
import { PAYMENT_METHOD } from "../../enum/enums";
import { MenuContext } from "../../context/menu.context";
import { useMutation } from "@apollo/client";
import { PLACE_ORDER } from "../../query/order/usePlaceOrder";

type TotalCardProps = {
  paymentMethod: number;
  onSelectPaymentMethod: (val: number) => void;
};

const TotalCard = ({
  paymentMethod,
  onSelectPaymentMethod
}: TotalCardProps) => {
  const context = useContext(MenuContext);

  const [createOrder, { loading, error }] = useMutation(PLACE_ORDER, {
    onCompleted: data => {
      console.log(data);
    }
  });

  const total = useMemo(() => {
    let totalCounter = 0;
    for (let i = 0; context?.cartItems?.length! > i; i++) {
      if (context?.cartItems?.[i]) {
        totalCounter =
          context.cartItems[i].count! * context.cartItems[i].price +
          totalCounter;
      }
    }
    return totalCounter;
  }, [context?.cartItems]);

  const totalWithTax = useMemo(() => {
    const totalAndTax = total * 0.1;
    return pesoFormat.format(total + totalAndTax);
  }, [total]);

  const onPlaceOrder = async () => {
    await createOrder({
      variables: {
        orders: context?.cartItems
      }
    });
  };

  return (
    <Container>
      <ViewSubtotal>
        <TextStyled>Subtotal</TextStyled>
        <TextStyled>{pesoFormat.format(total)}</TextStyled>
      </ViewSubtotal>
      <ViewTax>
        <TextStyled>Tax 10%</TextStyled>
        <TextStyled>{pesoFormat.format(total * 0.1)}</TextStyled>
      </ViewTax>
      <DashedDivider />
      <ViewTotal>
        <TextStyled category="h6">Total</TextStyled>
        <TextStyled category="h6">{totalWithTax}</TextStyled>
      </ViewTotal>
      <PaymentMethodView>
        <TextStyled>Payment Method</TextStyled>
        <MethodPickerView>
          <PaymentMethod
            label="Cash"
            onSelectPaymentMethod={onSelectPaymentMethod}
            isActive={paymentMethod === PAYMENT_METHOD.CASH}
          />
          <PaymentMethod
            label="Gcash"
            path={require("../../../assets/imgs/gcash.png")}
            onSelectPaymentMethod={onSelectPaymentMethod}
            isActive={paymentMethod === PAYMENT_METHOD.GCASH}
          />
          <PaymentMethod
            label="Paymaya"
            path={require("../../../assets/imgs/paymaya.png")}
            onSelectPaymentMethod={onSelectPaymentMethod}
            isActive={paymentMethod === PAYMENT_METHOD.PAYMAYA}
          />
        </MethodPickerView>
      </PaymentMethodView>
      <PlaceOrderButton
        activeOpacity={0.8}
        onPress={onPlaceOrder}
        disabled={!context?.cartItems?.length}
      >
        {loading ? (
          <Spinner />
        ) : (
          <TextStyled style={{ color: "white" }}>Place Order</TextStyled>
        )}
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

const PlaceOrderButton = styled.TouchableOpacity<{ disabled: boolean }>`
  justify-content: center;
  align-items: center;
  background-color: #a7727d;
  margin-top: 30px;
  border-radius: 5px;
  padding: 8px;
  opacity: ${p => (p.disabled ? 0.5 : 1)};
`;

export default TotalCard;
