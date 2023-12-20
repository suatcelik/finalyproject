import React from "react";
import Clients from "../components/Shop/Clients";
import Text from "../components/About/Text";
import Testimonials from "../components/About/Testimonials";
import StatsAndVideo from "../components/About/StatsAndVideo";
import TeamSection from "../components/About/TeamSection";
import AboutUs from "../components/About/AboutUs";

export default function AboutPage() {
  return (
    <>
      <AboutUs />
      <StatsAndVideo />
      <TeamSection />
      <Text />
      <Clients />
      <Testimonials />
    </>
  );
}
