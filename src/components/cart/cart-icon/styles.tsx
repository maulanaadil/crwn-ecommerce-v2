import styled from "styled-components";
import { ReactComponent as ShoppingIcon } from "@Assets/shopping-bag.svg";

export const CartIconContainer = styled.div`
  width: 48px;
  height: 48px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const Icon = styled(ShoppingIcon)`
  width: 28px;
  height: 28px;
`;

export const ItemCount = styled.span`
  position: absolute;
  bottom: 12px;
  font-size: 12px;
  font-weight: normal;
`;
