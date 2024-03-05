"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import heart from "../../../public/heart.svg";

const images = [
  "https://images.unsplash.com/photo-1628348070889-cb656235b4eb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://static.tildacdn.com/tild6630-6335-4463-b831-316434666633/photo.jpg",
  "https://www.thesenior.com.au/images/transform/v1/crop/frm/6Gg6GtPg7U4UELscme8yjY/f3fa9d17-cdbf-405c-8142-04b2ec4452a6.jpg/r1770_367_5010_2549_w1200_h678_fmax.jpg",
  "https://scx2.b-cdn.net/gfx/news/hires/2018/studyfindsne.jpg",
];

const IMAGES = [
  "https://backend.cardiocenter.uz/storage/news/December2023/99oabg0ncSS5XlfbByzM.jpg",
  "https://backend.cardiocenter.uz/storage/news/November2023/8y2mIoi48Hbj6Wm3DW7k.jpg",
  "https://backend.cardiocenter.uz/storage/news/November2023/7VOl8H25msMSeJbx4ycU.jpg",
];
export default function News() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      className="w-full py-10 news-background">
      <div className="container">
        <div className="flex items-center gap-2 mb-8">
          <Image src={heart.src} width={30} height={26} alt="heart img" />
          <p className="text-primary text-2xl font-[600]">So'ngi yangiliklar</p>
        </div>
        <div className="h-[600px] grid grid-cols-10 grid-rows-6 gap-4">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="col-span-6 row-span-6 news-item">
            <img
              className="object-cover w-full h-full rounded-md"
              src={IMAGES[0]}
              alt="news image"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.3 }}
            className="col-span-4 row-span-3 col-start-7 news-item">
            <img
              className="object-cover w-full h-full rounded-md"
              src={IMAGES[1]}
              alt="news image"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.2 }}
            className="col-span-4 row-span-3 col-start-7 row-start-4 news-item">
            <img
              className="object-cover w-full h-full rounded-md"
              src={IMAGES[2]}
              alt="news image"
            />
          </motion.div>
        </div>
        {/* <Carousel images={images} /> */}
      </div>
    </motion.section>
  );
}
