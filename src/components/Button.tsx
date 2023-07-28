import React from "react";
import { styled } from "styled-components/native";

type ButtonProps = {
  text: string;
  onPress: () => void;
  disabled?: boolean;
  isSubmitting: boolean;
};

const Button = ({ text, disabled, isSubmitting, onPress }: ButtonProps) => {
  return (
    <ButtonStyled activeOpacity={0.8} onPress={onPress} disabled={disabled}>
      <TextStyled>{isSubmitting ? "submitting..." : text}</TextStyled>
    </ButtonStyled>
  );
};

const ButtonStyled = styled.TouchableOpacity<{ disabled?: boolean }>`
  background-color: #a7727d;
  padding: 12px;
  border-radius: 5px;
  opacity: ${p => (p.disabled ? 0.5 : 1)};
`;

const TextStyled = styled.Text`
  color: #f9f5e7;
`;

export default Button;
