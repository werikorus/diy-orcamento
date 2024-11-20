/* eslint-disable react/jsx-key */
"use client";
import React, { ReactNode } from "react";
import { ContactForm, ProductsForm, ServicesForm } from "./Fragments";
import { Footer } from "../Footer";
import { useMainDataContext, useDataForm } from "@/Hooks";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styles from "./Form.module.css";

export const Form = () => {
  const { setCurrentSlideIndex, currentSlideIndex } = useMainDataContext();
  const { onSubmbitForm } = useDataForm();
  const router = useRouter();

  const forms: ReactNode[] = [
    <ContactForm />,
    <ProductsForm />,
    <ServicesForm />,
    "",
  ];

  return (
    <section className={styles.formContainer}>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        allowTouchMove={true}
        onSwiper={() => {
          setCurrentSlideIndex(0);
        }}
        onSlideChange={(swipe) => {
          setCurrentSlideIndex(swipe.activeIndex);
          onSubmbitForm(swipe.activeIndex);
        }}
        onReachEnd={() => router.push("/Fechamento")}
        className={styles.swiper}
        initialSlide={currentSlideIndex}
      >
        {forms.map((form, index) => (
          <SwiperSlide key={index}>{form}</SwiperSlide>
        ))}
        <Footer />
      </Swiper>
    </section>
  );
};
