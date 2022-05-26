import styled from "styled-components";
import { motion } from "framer-motion";

import Button from "@Components/button";

export const CartDropDownContainer = styled(motion.div)`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 70px;
  right: 90px;
  z-index: 5;
`;

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 100px auto;
`;

export const CartItemsContainer = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ButtonCheckout = styled(Button)`
  margin-top: auto;
`;
