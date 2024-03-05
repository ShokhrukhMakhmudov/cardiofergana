"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import div from "../../../public/assets/div.svg";
import telegram from "../../../public/assets/telegram.svg";
import instagram from "../../../public/assets/instagram.svg";
import twitter from "../../../public/assets/twitter.svg";
import facebook from "../../../public/assets/facebook.svg";

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

export default function Footer() {
  return (
    <footer className="bg-[#17639a] pt-10 text-white mt-10">
      <div className="container ">
        <h3 className="text-center text-xl font-[500] mb-5">
          RESPUBLIKA IXTISOSLASHTIRILGAN KARDIOLOGIYA ILMIY AMALIY TIBBIYOT
          MARKAZINING FARG’ONA VILOYAT MINTAQAVIY FILIALI
        </h3>
        <hr className="mb-7" />
        <div className="flex items-center mb-7">
          <ul className="w-4/5 flex flex-wrap">
            {links.map(({ name, link }) => (
              <motion.li className="w-1/3 mb-2 hover:font-bold">
                <Link href={link}>
                  <motion.p
                    className="max-w-fit"
                    whileHover={{ scale: 1.5 }}
                    transition={{ duration: 0.4 }}>
                    {name}
                  </motion.p>
                </Link>
              </motion.li>
            ))}
          </ul>
          <div className="w-1/5 flex items-center gap-5">
            <Link href="">
              <motion.div
                whileHover={{ rotateX: 360, scale: 1.5 }}
                transition={{ duration: 0.4 }}>
                <Image
                  src={telegram.src}
                  width={32}
                  height={32}
                  alt="messanger icon"
                />
              </motion.div>
            </Link>
            <Link href="">
              <motion.div
                whileHover={{ rotateX: 360, scale: 1.5 }}
                transition={{ duration: 0.4 }}>
                <Image
                  src={instagram.src}
                  width={32}
                  height={32}
                  alt="messanger icon"
                />
              </motion.div>
            </Link>
            <Link href="">
              <motion.div
                whileHover={{ rotateX: 360, scale: 1.5 }}
                transition={{ duration: 0.4 }}>
                <Image
                  src={twitter.src}
                  width={32}
                  height={32}
                  alt="messanger icon"
                />
              </motion.div>
            </Link>
            <Link href="">
              <motion.div
                whileHover={{ rotateX: 360, scale: 1.5 }}
                transition={{ duration: 0.4 }}>
                <Image
                  src={facebook.src}
                  width={32}
                  height={32}
                  alt="messanger icon"
                />
              </motion.div>
            </Link>
          </div>
        </div>
      </div>
      <div className=" bg-[#135584] py-4">
        <div className="container flex justify-between items-center ">
          <p>© 2023 Cardio center</p>
          <Link
            href="https://t.me/shox_dev"
            target="_blank"
            className="flex gap-2 div-logo">
            <Image src={div.src} alt="developer logo" width={42} height={47} />
            <div>
              <p>
                Developed by <br /> <b>DIV-Group</b>
              </p>
            </div>
          </Link>
        </div>
      </div>
    </footer>
  );
}
