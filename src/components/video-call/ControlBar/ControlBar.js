import React, { useEffect } from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";

import EndCallButton from "./EndCallButton";
import MicButton from "./MicButton";
import SpeakerButton from "./SpeakerButton";
import FlipButton from "./FlipButton";

const barHeight = "6rem";

const Bar = styled(motion.div)`
  position: absolute;
  z-index: 100;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 90vw;
  @media screen and (min-width: 768px) {
    width: 40vw;
  }
  bottom: 0;
  height: ${barHeight};
  border-radius: 0.75rem 0.75rem 0 0;
  background: rgba(255, 255, 255, 0.2);
`;

const ControlBar = ({ onButtonClick, onMouseEnter, onMouseLeave, visible }) => {
  const variants = {
    visible: { opacity: 1, y: 0, transition: { type: "tween" } },
    hidden: { opacity: 0, y: barHeight, transition: { type: "tween" } }
  };

  const controls = useAnimation();

  useEffect(() => {
    console.log(`ControlBar useEffect visible = ${visible}`);
    controls.start(() => variants[visible]);
  }, [controls, variants, visible]);

  return (
    <Bar
      initial={"visible"}
      animate={controls}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <SpeakerButton onClick={() => onButtonClick("speaker")} />
      <MicButton onClick={() => onButtonClick("mic")} />
      <FlipButton onClick={() => onButtonClick("flip")} />
      <EndCallButton onClick={() => onButtonClick("end")} />
    </Bar>
  );
};

export default ControlBar;