import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  query login($loginInput: LoginInput) {
    login(LoginInput: $loginInput) {
      username
    }
  }
`;
