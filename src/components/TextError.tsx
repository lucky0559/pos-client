import { View, Text } from "react-native";
import React from "react";
import { styled } from "styled-components/native";

type TextErrorProps = {
  error: string;
};

const TextError = ({ error }: TextErrorProps) => {
  return <TextStyled>{error}</TextStyled>;
};

const TextStyled = styled.Text`
  color: red;
`;

export default TextError;
