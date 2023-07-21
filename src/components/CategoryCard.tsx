import { View } from "react-native";
import React from "react";
import { Layout, Text } from "@ui-kitten/components";
import { styled } from "styled-components/native";

const CategoryCard = () => {
  return (
    <Container activeOpacity={0.8}>
      <IconLayout></IconLayout>
      <DetailLayout>
        <CategoryItem category="label">Breakfast</CategoryItem>
        <CategoryCount category="c1">13 items</CategoryCount>
      </DetailLayout>
    </Container>
  );
};

const Container = styled.TouchableOpacity`
  width: 180px;
  height: 140px;
  background-color: #eddbc7;
  padding: 10px;
  border-radius: 15px;
  margin-vertical: 10px;
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

const CategoryItem = styled(Text)`
  font-size: 18px;
`;

const CategoryCount = styled(Text)`
  font-size: 14px;
`;

export default CategoryCard;
