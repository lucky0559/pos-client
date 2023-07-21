import { View } from "react-native";
import React from "react";
import { Layout, Text } from "@ui-kitten/components";
import { styled } from "styled-components/native";

const CategoryCard = () => {
  return (
    <Container>
      <IconLayout></IconLayout>
      <DetailLayout>
        <Text category="label">Breakfast</Text>
        <Text category="c1">13 items</Text>
      </DetailLayout>
    </Container>
  );
};

const Container = styled(Layout)`
  width: 180px;
  height: 130px;
  background-color: #eddbc7;
  padding: 10px;
`;

const IconLayout = styled(Layout)`
  display: flex;
  flex: 1;
  background-color: transparent;
`;

const DetailLayout = styled(Layout)`
  display: flex;
  flex: 1;
  background-color: transparent;
`;

export default CategoryCard;
