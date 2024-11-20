"use client";

import React from "react";
import { Button } from "@mui/material";
import styles from "./Footer.module.css";
import { useRouter } from "next/navigation";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import HomeIcon from "@mui/icons-material/Home";
import { useSwiper } from "swiper/react";
import { FooterStepper } from "../FooterStepper";
import { useMainDataContext } from "@/Hooks";

export const Footer = () => {
  const router = useRouter();
  const swiper = useSwiper();
  const { currentSlideIndex } = useMainDataContext();

  const handlePrevSlide = () => {
    if (currentSlideIndex === 3) {
      router.push("/Pedido");
    } else {
      swiper.slidePrev();
    }
  };

  return (
    <footer className={styles.footerContainer}>
      <FooterStepper />
      <div>
        <Button onClick={() => handlePrevSlide()} variant="text" size="large">
          <ArrowBackIosNewIcon />
        </Button>
        <Button onClick={() => swiper.slideNext()} variant="text" size="large">
          <ArrowForwardIosIcon />
        </Button>
        <Button variant="text" size="large" onClick={() => router.push("/")}>
          <HomeIcon />
        </Button>
      </div>
    </footer>
  );
};
