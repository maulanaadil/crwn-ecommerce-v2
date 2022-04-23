import PropTypes from "prop-types";

import {
  MenuItemContainer,
  BackgroundImage,
  ContentContainer,
  Title,
  Subtitle,
} from "./styles";

const CategoryItem = ({ title, imageUrl }) => (
  <MenuItemContainer to={`/shop/${title}`}>
    <BackgroundImage imageUrl={imageUrl} />
    <ContentContainer>
      <Title>{title}</Title>
      <Subtitle>SHOP NOW</Subtitle>
    </ContentContainer>
  </MenuItemContainer>
);

CategoryItem.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default CategoryItem;
