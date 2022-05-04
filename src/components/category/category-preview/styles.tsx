import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

const gray = "#5b5b5b";

export const CategoryPreviewContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const Title = styled(Link)`
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;

  &:hover {
    color: ${gray};
  }
`;

export const Preview = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
`;
