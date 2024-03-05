"use client";
import logo from "../../../public/logo.svg";
import gerb from "../../../public/gerb.svg";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const links = [
  {
    name: "Markaz haqida",
    link: "/about",
  },
  {
    name: "Xizmatlar",
    link: "/services",
  },
  {
    name: "Yangiliklar",
    link: "/news",
  },
  {
    name: "Bo'limlar",
    link: "/features",
  },
  {
    name: "Bizning xodimlar",
    link: "/team",
  },
  {
    name: "Kontaktlar",
    link: "/contacts",
  },
];

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}>
      <div className="top bg-primary py-4 text-white">
        <div className="container flex items-center justify-between">
          <Link href="/">
            <Image className="" src={logo} alt="logo" width={130} height={40} />
          </Link>
          <div className="flex flex-1 items-center justify-between border-x-2 border-white px-4 mx-4">
            <p>150409, Farg’ona v., Mustaqillik shukronasi</p>
            <p>+998 97 502 28 91</p>

            <a href="mailto:example@gmail.com" className="cursor-pointer">
              example@gmail.com
            </a>
            <a href="tel:+998975022891" className="cursor-pointer text-bold">
              Bog'lanish
            </a>
          </div>
          <div className="flex items-center">
            <Image src={gerb} alt="logo" width={40} height={40} />
            <p className="w-[120px] text-[9px] ms-1">
              Министерство Здравоохранения Республика Узбекистан
            </p>
          </div>
        </div>
      </div>
      <div className="bottom header-background border-b-2 border-primary pt-5 pb-4">
        <div className="container flex items-center justify-around text-primary font-[600]">
          {links.map(({ name, link }) => (
            <motion.div
              whileHover={{ scale: [1, 1.4, 1.17] }}
              transition={{ duration: 0.4 }}>
              <Link className="nav-link" href={link}>
                {name}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.header>
  );
}
