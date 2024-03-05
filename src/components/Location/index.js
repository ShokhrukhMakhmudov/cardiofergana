import React from "react";
import Image from "next/image";
import heart from "../../../public/heart.svg";
function Location() {
  return (
    <section className="w-full">
      <div className="container">
        <div className="flex items-center gap-2 mb-8">
          <Image src={heart.src} width={30} height={26} alt="heart img" />
          <p className="text-primary text-2xl font-[600]">Manzil</p>
        </div>
        <div className="grid grid-cols-2 gap-10">
          <div className="flex flex-col gap-3 p-8 text-xl drop-shadow-2xl bg-white rounded-2xl">
            <img
              className="w-full rounded-xl"
              src="https://avatars.mds.yandex.net/i?id=724e325aa9a91fe84fccc4b67ac3e688-4475295-images-thumbs&n=13"
              alt="buiilding"
            />
            <h3 className="text-2xl">
              RESPUBLIKA IXTISOSLASHTIRILGAN KARDIOLOGIYA ILMIY AMALIY TIBBIYOT
              MARKAZINING FARG’ONA VILOYAT MINTAQAVIY FILIALI
            </h3>
            <p>
              Manzil: Farg’ona tumani. Yangi asr MFY, Mustaqillik shukronasi
              ko’chasi.
            </p>
            <p>E-pochta: frg.vil.kardio.disp@ssv.uz</p>
            <p>Telefon: +998 73 352 91 01</p>
            <p>Veb-sayt: cardiocenter.vercel.app</p>
          </div>

          <iframe
            className="p-5 drop-shadow-2xl bg-white rounded-2xl"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1893.2679426107559!2d71.76821012630602!3d40.32230349328821!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb8548d6bad0c9%3A0xd431c4cadd2a3d59!2zS2FyZGlvIG1hcmtheijQmtCw0YDQtNC40L4g0KbQtdC90YLRgCkg0KTQtdGA0LPQsNC90YHQutC-0Lkg0L7QsdC70LDRgdGC0Lg!5e1!3m2!1sru!2sus!4v1703440015448!5m2!1sru!2sus"
            style={{ border: 0, width: "100%", height: "100%" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </section>
  );
}

export default Location;
