import React, { useContext } from "react";
import { Layout, Text } from "@ui-kitten/components";
import { styled } from "styled-components/native";
import DropShadow from "../DropShadow";
import { Category } from "../../types/category";
import { MenuContext } from "../../context/menu.context";

type CategoryCardProps = {
  category: Category;
};

const CategoryCard = ({ category }: CategoryCardProps) => {
  const context = useContext(MenuContext);

  return (
    <DropShadow width={180} borderRadius={15} height={140}>
      <Container
        activeOpacity={0.7}
        onPress={() => context?.actions.setCategory!(category.id)}
        selectedId={context?.selectedCategory}
        categoryId={category.id}
      >
        <IconLayout></IconLayout>
        <DetailLayout>
          <CategoryItem
            category="label"
            selectedId={context?.selectedCategory}
            categoryId={category.id}
          >
            {category.name}
          </CategoryItem>
          <CategoryCount
            category="c1"
            selectedId={context?.selectedCategory}
            categoryId={category.id}
          >
            {category.items.length} items
          </CategoryCount>
        </DetailLayout>
      </Container>
    </DropShadow>
  );
};

const Container = styled.TouchableOpacity<{
  selectedId?: number;
  categoryId: number;
}>`
  width: 180px;
  height: 140px;
  background-color: ${p =>
    p.categoryId === p.selectedId ? "#A7727D" : "#f9f5e7"};
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

const CategoryItem = styled(Text)<{ selectedId?: number; categoryId: number }>`
  font-size: 18px;
  color: ${p => (p.selectedId === p.categoryId ? "#F9F5E7" : "black")};
`;

const CategoryCount = styled(Text)<{ selectedId?: number; categoryId: number }>`
  font-size: 14px;
  color: ${p => (p.selectedId === p.categoryId ? "#F9F5E7" : "black")};
`;

export default CategoryCard;
