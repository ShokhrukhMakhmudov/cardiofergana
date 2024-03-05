"use client";

import Image from "next/image";
import heart from "../../../public/heart.svg";
import { motion } from "framer-motion";
import { useState } from "react";
import Ambulator from "./Icons/Ambulator";
import Statsionar from "./Icons/Statsionar";
import Laboratoriya from "./Icons/Laboratoriya";
import Texnologiya from "./Icons/Texnologiya";

function Services() {
  return (
    <section className="py-5 w-full">
      <div className="container vertical-line">
        <div className="flex items-center gap-2 mb-8">
          <Image src={heart.src} width={30} height={26} alt="heart img" />
          <p className="text-primary text-2xl font-[600]">Bizning xizmatlar</p>
        </div>
        {/* <ul className="text-primary font-[500] flex flex-wrap items-center gap-2 text-center">
          <motion.li
            className={`flex flex-1 flex-col items-center gap-2 bg-white drop-shadow-2xl drop-shadow-primary rounded-lg p-4 cursor-pointer ${
              activeCard == 0 ? "service-active" : ""
            }`}
            whileHover={{ scale: [1, 1.08, 1.03] }}
            transition={{ duration: 0.4 }}>
            <Ambulator color={activeCard == 0 ? "#fff" : ""} />
            <p>Ambulator xizmat</p>
          </motion.li>
          <motion.li
            className="flex flex-1 flex-col items-center gap-2 bg-white drop-shadow-2xl drop-shadow-primary rounded-lg p-4 cursor-pointer"
            whileHover={{ scale: [1, 1.08, 1.03] }}
            transition={{ duration: 0.4 }}>
            <Image src={laboratoriya.src} width={30} height={30} alt="icon" />
            <p>Statsionar xizmat</p>
          </motion.li>
          <motion.li
            className="flex flex-1 flex-col items-center gap-2 bg-white drop-shadow-2xl drop-shadow-primary rounded-lg p-4 cursor-pointer"
            whileHover={{ scale: [1, 1.08, 1.03] }}
            transition={{ duration: 0.4 }}>
            <Image src={statsionar.src} width={30} height={30} alt="icon" />
            <p>Laboratoriya xizmati</p>
          </motion.li>
          <motion.li
            className="flex flex-1 flex-col items-center gap-2 bg-white drop-shadow-2xl drop-shadow-primary rounded-lg p-4 cursor-pointer"
            whileHover={{ scale: [1, 1.08, 1.03] }}
            transition={{ duration: 0.4 }}>
            <Image src={texnologiya.src} width={30} height={30} alt="icon" />
            <p>Yuqori texnologik amaliyotlar xizmati</p>
          </motion.li>
        </ul> */}
        <motion.div className="max-w-fit m-auto flex items-center justify-between gap-16 p-8 bg-white drop-shadow-2xl rounded-3xl mb-8 border-primary border-2">
          <div className="text-right">
            <div className="max-w-fit flex flex-1 items-center gap-3 bg-primary text-white text-2xl font-bold drop-shadow-2xl drop-shadow-primary rounded-lg p-4 cursor-pointer mb-5 ml-auto">
              <Ambulator color={"#fff"} />
              <p>Ambulator xizmat</p>
            </div>
            <p className="text-2xl max-w-2xl">
              "Ambulator xizmat" tibbiy xizmatlarni yotishga bo'lmagan holda,
              ya'ni shifoxona yotishiga kirishni talab qilmagan holatda
              ko'rsatadigan tibbiy xizmatlarni ifodalaydi. Ambulator xizmatlar
              odatda poliklinikalarda, tibbiy markazlarda, kasalliklar
              profilaktika va davolash punktlarida va boshqa ambulatoriyalarda
              amalga oshiriladi.
            </p>
          </div>
          <img
            className="rounded-3xl"
            src="https://medboli.ru/wp-content/uploads/8/3/5/835ce44b644ba2b41af6b39e90f754fc.jpeg"
            width={600}
          />
        </motion.div>
        <motion.div className="max-w-fit m-auto flex flex-row-reverse items-center justify-between gap-16 p-8 bg-primary drop-shadow-2xl rounded-3xl mb-8">
          <div>
            <div className="max-w-fit flex flex-1 items-center gap-3 bg-white text-primary text-2xl font-bold drop-shadow-2xl drop-shadow-primary rounded-lg p-4 cursor-pointer mb-5">
              <Statsionar color={"#1258af"} />
              <p>Statsionar xizmat</p>
            </div>
            <p className="text-2xl max-w-2xl text-white">
              "Statsionar davolash" tibbiy tizimda shifoxonada yoki klinikada,
              biror vaqt davomida turuvchi kasalliklar yoki tibbiy jarayonlar
              uchun yotish va davolashni ifodalaydi. Bu turi kasalliklar yoki
              jarayonlar kasalxonalarda yotish, kuzatish va davolashni talab
              qiladi.
            </p>
          </div>
          <img
            className="rounded-3xl"
            src="https://sc02.alicdn.com/kf/HTB18W.ObjihSKJjy0Feq6zJtpXaC/200419403/HTB18W.ObjihSKJjy0Feq6zJtpXaC.jpg"
            width={600}
          />
        </motion.div>
        <motion.div className="max-w-fit m-auto flex items-center justify-between gap-16 p-8 bg-white drop-shadow-2xl rounded-3xl mb-8 border-primary border-2">
          <div className="text-right">
            <div className="max-w-fit flex flex-1 items-center gap-3 bg-primary text-white text-2xl font-bold drop-shadow-2xl drop-shadow-primary rounded-lg p-4 cursor-pointer mb-5 ml-auto">
              <Laboratoriya color={"#fff"} />
              <p>Laboratoriya xizmati</p>
            </div>
            <p className="text-2xl max-w-2xl">
              Klinik laboratoriya kasalliklar diagnostikasi va monitoringi
              sohasida ilg‘or texnologiyalardan foydalangan holda laboratoriya
              tadqiqotlarini amalga oshiradigan zamonaviy laboratoriya xizmati
              hisoblanadi.
            </p>
          </div>
          <img
            className="rounded-3xl"
            src="https://babyzzz.ru/wp-content/uploads/2019/03/post_5c9418b350eda.jpg"
            width={600}
          />
        </motion.div>
        <motion.div className="max-w-fit m-auto flex flex-row-reverse items-center justify-center gap-16 p-8 bg-primary drop-shadow-2xl rounded-3xl">
          <div>
            <div className="max-w-fit flex flex-1 items-center gap-3 bg-white text-primary text-2xl font-bold drop-shadow-2xl drop-shadow-primary rounded-lg p-4 cursor-pointer mb-5">
              <Texnologiya color={"#1258af"} />
              <p>Yuqori texnologik amaliyotlar xizmati</p>
            </div>
            <p className="text-2xl max-w-2xl text-white">
              Yuqori texnologiyali tibbiy yordam - bu ilmiy jihatdan isbotlangan
              samaradorlikka ega, davolashning yangi murakkab yoki noyob
              usullaridan foydalangan holda ko'rsatiladigan tibbiy yordam.
            </p>
          </div>
          <img
            className="rounded-3xl"
            src="https://медуниверситет.рф/upload/iblock/592/qv1ixmtrpauvdbdx8dn48jjsprdwjf7q.jpg"
            width={600}
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Services;
