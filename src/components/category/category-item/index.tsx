import { FC } from "react";

import {
  MenuItemContainer,
  BackgroundImage,
  ContentContainer,
  Title,
  Subtitle,
} from "./styles";

import { CategoryItemProps } from "./types";

const CategoryItem: FC<CategoryItemProps> = ({ title, imageUrl }) => (
  <MenuItemContainer to={`/shop/${title}`}>
    <BackgroundImage imageUrl={imageUrl} />
    <ContentContainer>
      <Title>{title}</Title>
      <Subtitle>SHOP NOW</Subtitle>
    </ContentContainer>
  </MenuItemContainer>
);

export default CategoryItem;
