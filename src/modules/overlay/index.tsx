import { AnimatePresence } from "framer-motion";

import { AnimatedCrwnIcon } from "@Assets/icons/animatedCrwn";

import { OverlayContainer, OverlayContent } from "./styles";
import { AnimatedOverlay } from "./animation";

const Overlay = () => {
  return (
    <AnimatePresence>
      <OverlayContainer
        initial="initial"
        animate="animate"
        exit="exit"
        variants={AnimatedOverlay}>
        <OverlayContent>
          <AnimatedCrwnIcon />
        </OverlayContent>
      </OverlayContainer>
    </AnimatePresence>
  );
};

export default Overlay;
