import React from "react";
import Clients from "../components/Shop/Clients";
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
      <Clients />
      <Testimonials />
    </>
  );
}
