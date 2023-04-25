"use client"

import { motion } from "framer-motion";
import { box, boxItem } from "../animations";
import Link from "next/link";
import { BsFacebook, BsYoutube } from "react-icons/bs";

const homeIcons = () => {
  return (
    <motion.div
      variants={box}
      initial="hidden"
      animate="visible"
      className="flex justify-center items-center">
      <Link href="#">
        <motion.i variants={boxItem}>
          <BsFacebook className="text-2xl" />
        </motion.i>
      </Link>
      <Link href="https://www.youtube.com/@kingdombelieversfellowship3872">
        <motion.i variants={boxItem}>
          <BsYoutube className="text-3xl ml-8" />
        </motion.i>
      </Link>
    </motion.div>
  );
}
export default homeIcons