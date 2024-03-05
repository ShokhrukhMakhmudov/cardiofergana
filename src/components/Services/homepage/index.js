"use client";

import Image from "next/image";
import Link from "next/link";
import heart from "../../../../public/heart.svg";
import { motion } from "framer-motion";
import Ambulator from "../Icons/Ambulator";
import Statsionar from "../Icons/Statsionar";
import Laboratoriya from "../Icons/Laboratoriya";
import Texnologiya from "../Icons/Texnologiya";
import { useState } from "react";
import { BiLinkExternal } from "react-icons/bi";

export default function ServicesComp() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      className="pt-5 mb-20 w-full">
      <div className="container">
        <div className="flex items-center gap-2 mb-8">
          <Image src={heart.src} width={30} height={26} alt="heart img" />
          <p className="text-primary text-2xl font-[600]">Bizning xizmatlar</p>
        </div>
        {/* <div>
          <img
            src={
              "https://i.pinimg.com/originals/46/5a/f1/465af15f6684b1ea0d799fda31c951e3.jpg"
            }
          />
        </div> */}

        <motion.ul className="flex flex-col gap-6">
          <motion.li
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
            }}
            transition={{ delay: 0.5 }}
            className="bg-white text-primary drop-shadow-2xl drop-shadow-primary rounded-lg p-7">
            <Link
              href="/services"
              className="flex flex-1 items-center gap-3 text-2xl font-bold cursor-pointer">
              <Ambulator color={"#1258af"} />
              <p>Ambulator xizmat</p>
              <BiLinkExternal className="ml-auto" />
            </Link>
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
            }}
            transition={{ delay: 0.8 }}
            className=" bg-primary text-white  drop-shadow-2xl drop-shadow-primary rounded-lg p-7">
            <Link
              href="/services"
              className="flex flex-1 items-center gap-3 text-2xl font-bold cursor-pointer">
              <Statsionar color={"#fff"} />
              <p>Statsionar xizmat</p>
              <BiLinkExternal className="ml-auto" />
            </Link>
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className=" bg-white text-primary  drop-shadow-2xl drop-shadow-primary rounded-lg p-7">
            <Link
              href="/services"
              className="flex flex-1 items-center gap-3 text-2xl font-bold cursor-pointer">
              <Laboratoriya color={"#1258af"} />
              <p>Laboratoriya xizmati</p>
              <BiLinkExternal className="ml-auto" />
            </Link>
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="  bg-primary text-white drop-shadow-2xl drop-shadow-primary rounded-lg p-7">
            <Link
              href="/services"
              className="flex flex-1 items-center gap-3 text-2xl font-bold cursor-pointer">
              <Texnologiya color={"#fff"} />
              <p>Yuqori texnologik amaliyotlar xizmati</p>
              <BiLinkExternal className="ml-auto" />
            </Link>
          </motion.li>
        </motion.ul>
      </div>
    </motion.section>
  );
}
