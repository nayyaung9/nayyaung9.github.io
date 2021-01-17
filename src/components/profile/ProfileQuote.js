import React from "react";
import { motion } from "framer-motion";
import "./profile.css";

const ProfileQuote = () => {
  return (
    <motion.div animate={{ scale: 2 }}>
      <img
        src="https://avatars3.githubusercontent.com/u/45455924?s=460&u=6906b8f9a292d23c58f9be589d4cacf798df8b6a&v=4"
        style={{ width: "100%", borderRadius: "50%" }}
        alt="Nga_Pone_Nay_Yaung_Lin_Lakk"
      />
    </motion.div>
  );
};

export default ProfileQuote;
