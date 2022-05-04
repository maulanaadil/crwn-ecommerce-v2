import styled from "styled-components";

export const CartItemContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  margin-bottom: 15px;
`;

export const ImageItem = styled.img`
  width: 30%;
`;

export const ItemDetailContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 20px;
`;

export const Name = styled.span`
  font-size: 16px;
`;

export const Price = styled.span`
  font-size: 14px;

  span {
    color: green;
  }
`;
