"use client";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { CgMenu, CgMenuMotion } from "react-icons/cg";

export default function Nav() {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className=" p-5 w-full">
      <div className="flex flex-row justify-between w-full">
        <motion.div
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.1, delay: 0.1 }}
        >
          <span>LOGO</span>
        </motion.div>
        <div className="hidden">
          <ul>
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/"}>About</Link>
            </li>
            <li>
              <Link href={"/"}>Contact</Link>
            </li>
          </ul>
        </div>

        <motion.div
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.1, delay: 0.4 }}
        >
          <Link href={"/"}>EXPLORE NOW</Link>
        </motion.div>

        <motion.div
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.1, delay: 0.6 }}
        >
          <span
            className="text-3xl cursor-pointer"
            onClick={() => {
              if (showNav) {
                setShowNav(false);
              } else {
                setShowNav(true);
              }
            }}
          >
            {showNav ? <CgMenuMotion /> : <CgMenu />}
          </span>
        </motion.div>
      </div>
      <div className={`${showNav ? "flex" : "hidden"} md:hidden`}>
        <ul className="w-full mt-6">
          <li className="nav-link">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="nav-link">
            <Link href={"/"}>About</Link>
          </li>
          <li className="nav-link">
            <Link href={"/"}>Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
