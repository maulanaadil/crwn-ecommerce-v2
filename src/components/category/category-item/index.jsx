import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const MenuItemLargeStyle = css`
  height: 300px;
`;

const MenuItemDefaultStyle = css`
  height: 240px;
`;

const getSizeMenuItem = (props) => {
  if (props.size === "large") {
    return MenuItemLargeStyle;
  }

  return MenuItemDefaultStyle;
};

const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: url(${(props) => props.imageUrl});
`;

const ContentContainer = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: white;
  opacity: 0.7;
  border: 0px transparent;
  position: absolute;
`;

const MenuItemContainer = styled(Link)`
  min-width: 30%;
  ${getSizeMenuItem}
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 7.5px 15px;
  background-position: center;
  background-size: cover;
  overflow: hidden;

  &:hover {
    cursor: pointer;

    ${BackgroundImage} {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.025, 0.45, 0.45, 0.95);
    }

    ${ContentContainer} {
      opacity: 0.9;
    }
  }

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }
`;

const Title = styled.div`
  font-weight: bold;
  margin-bottom: 6px;
  font-size: 22px;
  color: #4a4a4a;
  text-transform: uppercase;
`;

const Subtitle = styled.div`
  font-weight: 300;
  font-size: 16px;
  text-transform: uppercase;
  padding-bottom: 10px;
`;

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
