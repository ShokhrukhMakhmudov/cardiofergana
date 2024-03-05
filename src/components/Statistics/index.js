"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import heart from "../../../public/heart.svg";
import {
  FaBed,
  FaRegGrinAlt,
  FaUserInjured,
  FaRegHospital,
  FaDiagnoses,
  FaGift,
  FaLaptopMedical,
} from "react-icons/fa";

function Countdown({ limit, time = 2000 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (count >= limit) {
        clearTimeout(timer);
      } else {
        setCount((prev) => prev + 1);
      }
    }, time / limit);
  }, [count]);

  return <p className="text-4xl font-bold w-[70px]">{count}</p>;
}

export default function Statistics() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      className="py-5 w-full">
      <div className="container">
        <div className="flex items-center gap-2 mb-8">
          <Image src={heart.src} width={30} height={26} alt="heart img" />
          <p className="text-primary text-2xl font-[600]">Statistika</p>
        </div>
        <motion.ul
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-white font-[500] flex flex-wrap items-center gap-2 text-center">
          <li className="flex flex-1 items-center justify-between bg-primary shadow-xl rounded-lg p-4">
            <FaRegHospital className="text-5xl" />
            <p>Shifoxona yotoqlar soni</p>
            <Countdown limit={230} />
          </li>
          <li className="flex flex-1 items-center justify-between bg-primary shadow-xl rounded-lg p-4">
            <FaUserInjured className="text-5xl" />
            <p>Davolanganlar soni</p>
            <Countdown limit={512} />
          </li>
          <li className="flex flex-1 items-center justify-between bg-primary shadow-xl rounded-lg p-4">
            <FaGift className="text-5xl" />
            <p>
              Davlat granti asosida <br /> davolanganlar soni
            </p>
            <Countdown limit={150} />
          </li>{" "}
          <li className="flex flex-1 items-center justify-between bg-primary shadow-xl rounded-lg p-4">
            <FaLaptopMedical className="text-5xl" />
            <p>Zamonaviy aparatlar soni</p>
            <Countdown limit={10} />
          </li>
        </motion.ul>
      </div>
    </motion.section>
  );
}
