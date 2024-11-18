/* eslint-disable react/jsx-key */
"use client";
import React, { ReactNode } from "react";

import {
  ContactForm,
  ProductsForm,
  ServicesForm,
  ConditionsForm,
} from "./Fragments";

import { PreviewOrImpress } from "../PreviewOrImpress";
import { Footer } from "../Footer";
import { useMainDataContext } from "@/Hooks";
import { useDataForm } from "@/Hooks";
import { useRouter } from "next/navigation";

import styles from "./Form.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export const Form = () => {
  const { setCurrentSlideIndex } = useMainDataContext();
  const { onSubmbitForm } = useDataForm();
  const router = useRouter();

  const forms: ReactNode[] = [
    <ContactForm />,
    <ProductsForm />,
    <ServicesForm />,
    "",
  ];

  return (
    <main className={styles.formContainer}>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        className={styles.swiper}
        allowTouchMove={true}
        onSwiper={() => {
          setCurrentSlideIndex(0);
        }}
        onSlideChange={(swipe) => {
          setCurrentSlideIndex(swipe.activeIndex);
          onSubmbitForm(swipe.activeIndex);
        }}
        onReachEnd={() => router.push("/Fechamento")}
      >
        {forms.map((form, index) => (
          <SwiperSlide key={index}>{form}</SwiperSlide>
        ))}
        <Footer />
      </Swiper>
    </main>
  );
};
