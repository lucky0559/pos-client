import { gql } from "@apollo/client";

export const PLACE_ORDER = gql`
  mutation createOrder($orders: [OrderInput!]!) {
    createOrder(orderInput: $orders) {
      id
    }
  }
`;
