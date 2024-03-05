"use client";
import React, { lazy } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "./style.module.css";

function Team() {
  let settings = {
    className: "flex gap-4",
    dots: false,
    infinite: false,
    lazyLoad: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    useCss: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <motion.div>
      <div className="container">
        <div className="flex items-center gap-2 mb-8">
          <Image src="/heart.svg" width={30} height={26} alt="heart img" />
          <p className="text-primary text-2xl font-[600]">Bizning Hodimlar</p>
        </div>
        <div className="slider-container overflow-x-hidden">
          <Slider {...settings}>
            <div className={`${style.card}`}>
              <img className="scale-125" src="/images/IMG_8760.jpg" />
              <div className={`${style.item}`}>
                <h3 className="text-2xl">Isomiddinov Jasurbek Anorbekovich</h3>
                <h4 className="text-2xl text-[red]">Kardiolog</h4>
                <h4 className="text-xl">Ish tartibi: 09:00 - 15:00</h4>
                <h4 className="text-xl">
                  Qabul kunlari: <br /> Dushanba - Juma
                </h4>
              </div>
            </div>
            <div className={`${style.card1}`}>
              <img className="scale-125" src="/images/IMG_8760.jpg" />
              <div className={`${style.item1}`}>
                <h3 className="text-xl">Isomiddinov Jasurbek Anorbekovich</h3>
                <h4 className="text-xl text-[red]">Kardiolog</h4>
                {/* <h4 className="text-xl">Ish tartibi: 09:00 - 15:00</h4>
                <h4 className="text-xl">Qabul kunlari: Du - Ju</h4> */}
              </div>
            </div>
            <div>
              <div className={`${style.card3}`}>
                <img
                  className="w-auto h-[350px] object-cover"
                  src="/images/IMG_8760.jpg"
                />
                <div className={`p-3 bg-[#0e50a0] text-white font-[500]`}>
                  <h4 className="text-xl text-[red]">Kardiolog</h4>
                  <h3 className="text-xl">Isomiddinov Jasurbek Anorbekovich</h3>
                </div>
              </div>
            </div>
            <div>
              <div className={`${style.card1}`}>
                <img className="scale-125" src="/images/IMG_8760.jpg" />
                <div className={`${style.item2}`}>
                  <h3 className="text-xl">Isomiddinov Jasurbek Anorbekovich</h3>
                  <h4 className="text-xl text-[red]">Kardiolog</h4>
                  {/* <h4 className="text-xl">Ish tartibi: 09:00 - 15:00</h4>
                <h4 className="text-xl">Qabul kunlari: Du - Ju</h4> */}
                </div>
              </div>
            </div>
            <div>
              <h3>5</h3>
            </div>
            <div>
              <h3>6</h3>
            </div>
            <div>
              <h3>7</h3>
            </div>
            <div>
              <h3>8</h3>
            </div>
          </Slider>
        </div>
      </div>
    </motion.div>
  );
}

export default Team;
