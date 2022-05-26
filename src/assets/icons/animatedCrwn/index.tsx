import { motion } from "framer-motion";

import {
  aAnimatedRectangle,
  aAnimatedTriangle,
  aAnimatedOval1,
  aAnimatedOval2,
  aAnimatedOval3,
} from "./animations";

export const AnimatedCrwnIcon = () => {
  return (
    <svg
      width="100px"
      height="80px"
      viewBox="0 0 50 39"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink">
      <title>Group</title>
      <desc>Created with Sketch.</desc>
      <g id="WiP" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="Artboard" transform="translate(-90.000000, -38.000000)">
          <g id="Group" transform="translate(90.000000, 38.000000)">
            <motion.polygon
              id="Rectangle"
              variants={aAnimatedRectangle}
              fill="#808282"
              points="3 14 25 26.5 47 14 40.855176 39 9.08421785 39"
            />
            <motion.polygon
              id="Triangle"
              variants={aAnimatedTriangle}
              fillOpacity="0.262838724"
              fill="#101A1A"
              points="25 8 40 39 10 39"
            />
            <motion.circle
              id="Oval"
              variants={aAnimatedOval1}
              fill="#5E6363"
              cx="2"
              cy="9"
              r="2"
            />
            <motion.circle
              id="Oval"
              variants={aAnimatedOval2}
              fill="#5E6363"
              cx="25"
              cy="2"
              r="2"
            />
            <motion.circle
              id="Oval"
              variants={aAnimatedOval3}
              fill="#5E6363"
              cx="48"
              cy="9"
              r="2"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};
