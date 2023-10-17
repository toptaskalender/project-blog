"use client";

import { MotionConfig } from "framer-motion";

function RespectedMotionConfig({ children }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

export default RespectedMotionConfig;
