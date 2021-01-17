import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const Navigation = () => (
  <motion.ul variants={variants}>
    {items.map((item, i) => (
      <MenuItem item={item} key={i} />
    ))}
  </motion.ul>
);

const items = [
  {
    name: "works",
    colors: "#FF008C",
  },
  {
    name: "resume",
    colors: "#D309E1",
  },
  {
    name: "services",
    colors: "#9C1AFF",
  },
  {
    name: "contact",
    colors: "#7700FF",
  },
];
