"use client";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Swiper core styles
import "swiper/css/navigation"; // Optional: Navigation styles
import "swiper/css/pagination"; // Optional: Pagination styles
import { Navigation, Pagination, Autoplay } from "swiper/modules"; // Import modules

import google from "../../public/Google.png";
import nike from "../../public/Nike.png";
import samsung from "../../public/Samsung.png";
import apple from "../../public/Apple.png";
import adidas from "../../public/Adidas.png";
import Image from "next/image";

const Slider = () => {
  return (
    <div className="flex justify-between justify-items-center align-center bg-white p-10 pt-20 ">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={4}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={true}
        className="w-full max-w-9xl wx- "
      >
        <SwiperSlide>
          <Image src={google} width={100} height={100} alt="google" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={nike} width={100} height={100} alt="google" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={samsung} width={100} height={100} alt="google" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={apple} width={30} height={30} alt="google" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={adidas} width={60} height={40} alt="google" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
