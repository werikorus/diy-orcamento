
import React from "react";
import { Button } from "@mui/material";
import styles from './Footer.module.css'
import { useRouter } from "next/navigation";


import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import HomeIcon from "@mui/icons-material/Home";
import { FooterProps } from "@/Types";

export const Footer = ({ nextSlide, prevSlide }: FooterProps) => {
  const router = useRouter();

  return (
    <footer className={styles.footerContainer}>
      <div className={styles.buttonContainer}>
        <Button onClick={prevSlide} variant="text" size="large">
          <ArrowBackIosNewIcon />
        </Button>

        <Button onClick={nextSlide} variant="text" size="large">
          <ArrowForwardIosIcon />
        </Button>

        <Button
          variant="text"
          size="large"
          onClick={() => router.push("/")}
        >
          <HomeIcon />
        </Button>
      </div>
    </footer>
  );
};