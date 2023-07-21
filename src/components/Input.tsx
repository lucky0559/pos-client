import React, { useState } from "react";
import { styled } from "styled-components/native";
import { Input } from "@ui-kitten/components";

type InputProps = {
  placeholder: string;
  value: string;
  onChangeText: (val: string) => void;
};

const InputField = ({ placeholder, value, onChangeText }: InputProps) => {
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

const InputStyled = styled(Input)<{ borderColor: string }>`
  margin: 5px;
  border-radius: 5px;
  height: 40px;
  padding-left: 10px;
`;

export default InputField;
