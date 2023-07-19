import React, { useState } from "react";
import { styled } from "styled-components/native";

type InputProps = {
  placeholder: string;
  value: string;
  onChangeText: (val: string) => void;
};

const Input = ({ placeholder, value, onChangeText }: InputProps) => {
  const [borderColor, setBorderColor] = useState("");

  return (
    <InputStyled
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      onFocus={() => setBorderColor("green")}
      onBlur={() => setBorderColor("black")}
      borderColor={borderColor}
    />
  );
};

const InputStyled = styled.TextInput<{ borderColor: string }>`
  border: ${p => `2px solid ${p.borderColor}`};
  margin: 5px;
  border-radius: 5px;
  height: 40px;
  padding-left: 10px;
`;

export default Input;
