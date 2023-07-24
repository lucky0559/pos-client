import React from "react";
import { Layout, Text } from "@ui-kitten/components";
import { styled } from "styled-components/native";
import DropShadow from "../DropShadow";
import { Category } from "../../types/category";

type CategoryCardProps = {
  category: Category;
};

const CategoryCard = ({ category }: CategoryCardProps) => {
  return (
    <DropShadow width={180} borderRadius={15} height={140}>
      <Container activeOpacity={0.7}>
        <IconLayout></IconLayout>
        <DetailLayout>
          <CategoryItem category="label">{category.name}</CategoryItem>
          <CategoryCount category="c1">
            {category.items.length} items
          </CategoryCount>
        </DetailLayout>
      </Container>
    </DropShadow>
  );
};

const Container = styled.TouchableOpacity`
  width: 180px;
  height: 140px;
  background-color: #f9f5e7;
  padding: 10px;
  border-radius: 15px;
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
