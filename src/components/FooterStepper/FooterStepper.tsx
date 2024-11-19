"use client";

import React, { useEffect, useState } from "react";
import styles from "./FooterStepper.module.css";

import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { useMainDataContext } from "@/Hooks";

const steps = ["Contato", "Produtos", "Serviços"];

export const FooterStepper = () => {
  const [activeStep, setActiveStep] = useState(0);
  const { currentSlideIndex } = useMainDataContext();

  useEffect(() => {
    setActiveStep(currentSlideIndex);
  }, [currentSlideIndex]);

  return (
    <footer className={styles.footerStepperContainer}>
      <Box sx={{ width: "100%" }}>
        <Stepper activeStep={activeStep}>
          {steps.map((label) => {
            const stepProps: { completed?: boolean } = {};
            const labelProps: {
              optional?: React.ReactNode;
            } = {};

            return (
              <Step key={label} {...stepProps} className={styles.step}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
      </Box>
    </footer>
  );
};
