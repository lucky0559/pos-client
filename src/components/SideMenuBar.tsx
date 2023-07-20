import React from "react";
import { styled } from "styled-components/native";

const SideMenuBar = () => {
  return (
    <Container>
      <Text>Menu</Text>
    </Container>
  );
};

const Container = styled.View`
  display: flex;
  height: 100%;
  flex: 1;
  padding: 30px;
`;

const Text = styled.Text`
  color: #a7727d;
  font-weight: bold;
`;

export default SideMenuBar;
