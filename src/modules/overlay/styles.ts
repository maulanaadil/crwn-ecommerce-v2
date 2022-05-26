import { motion } from "framer-motion";
import styled from "styled-components";

export const OverlayContainer = styled(motion.div)`
  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  left: 0;

  display: grid;
  place-items: center;

  z-index: 999;
`;

export const OverlayContent = styled(motion.div)`
  text-align: center;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  display: flex;
  gap: 30px;
`;
