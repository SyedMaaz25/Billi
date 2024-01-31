import React from "react";
import { Box } from "../atom/box";
import Hero from "../components/hero";
import Offer from "../components/offer";
import Services from "../components/services";
import Strategy from "../components/strategy";
import Methodology from "../components/methodology";
import Testimonials from "../components/testimonials";

const Index = () => {
  return (
    <Box>
      <Hero />
      <Offer />
      <Services />
      <Strategy />
      <Methodology />
      <Testimonials />
    </Box>
  );
};

export default Index;