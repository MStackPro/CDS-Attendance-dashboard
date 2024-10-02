"use client";
import { motion } from "framer-motion";
import React from "react";

export default function template({ children }) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 100 }}
      transition={{type: "easeIn", duration: 0.7}}
    >
      {children}
    </motion.div>
  );
}